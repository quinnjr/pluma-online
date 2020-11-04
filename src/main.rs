// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

#![cfg_attr(debug_assertions, allow(unused_imports))]
#![cfg_attr(debug_assertions, allow(dead_code))]
#![cfg_attr(debug_assertions, allow(unused_variables))]

#![cfg_attr(not(debug_assertions), deny(unused_imports))]
#![cfg_attr(not(debug_assertions), deny(dead_code))]
#![cfg_attr(not(debug_assertions), deny(unused_variables))]

#[macro_use]
extern crate diesel;

use std::env;

use actix_web::{http, middleware as actix_middleware, App, HttpServer};
use diesel::{
    prelude::*,
    r2d2::{self, ConnectionManager},
};
use log::info;

mod constants;
mod error;
mod guards;
mod handlers;
mod middleware;
mod models;
mod response;
mod schema;

pub(crate) type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();
    env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    let database_url =
        env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let port = env::var("PLUMA_PORT").unwrap_or("3000".into());

    let manager = ConnectionManager::<PgConnection>::new(database_url);

    let pool: Pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create the database pool");

    info!("Starting PluMA web service...");

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .wrap(actix_middleware::Logger::default())
            .wrap(actix_middleware::Compress::new(
                http::header::ContentEncoding::Gzip,
            ))
            .configure(handlers::config)
    })
    .bind(format!("127.0.0.1:{}", port))?
    .run()
    .await
}
