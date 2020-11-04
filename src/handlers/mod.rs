// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{get, web, Responder};

use crate::response::JsonResponse;

pub(crate) mod auth;
pub(crate) mod categories;
pub(crate) mod plugins;

pub fn config(cfg: &mut web::ServiceConfig) {
    cfg.service(index_action)
        .service(web::scope("/categories").service(categories::get_action))
        .service(
            web::scope("/plugins")
                .service(plugins::get_action)
                .service(plugins::get_by_category_id_action),
        )
        .service(
            web::scope("/auth")
                .service(auth::login_action)
                .service(auth::register_action),
        );
}

#[get("/")]
pub async fn index_action() -> impl Responder {
    JsonResponse {
        data: Some("Here be dragons."),
        errors: None,
    }
}
