// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

#[macro_use]
extern crate diesel;

use actix_web::{dev::ServiceRequest, web, App, Error, HttpServer};
use anyhow::Context;
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};
use futures::StreamExt;

mod handlers;
mod models;
mod result;
mod schema;

use result::Result;

pub(crate) type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;

#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let manager = ConnectionManager::<PgConnection>::new(database_url);

    let pool: Pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create the database pool");

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .route("/", web::get().to(handlers::index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
