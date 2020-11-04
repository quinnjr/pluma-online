// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{get, web, Error, HttpResponse};
use diesel::{dsl::delete, insert_into, QueryDsl, RunQueryDsl};
use serde::{Deserialize, Serialize};

use crate::models::Category;
use crate::response::JsonResponse;
use crate::schema::categories::dsl::*;
use crate::Pool;

#[derive(Debug, Deserialize, Serialize)]
pub struct InputCategory {}

#[get("")]
pub async fn get_action(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    let res = web::block(move || get_all_categories(&db))
        .await
        .map(|data| {
            HttpResponse::Ok().json(JsonResponse {
                data: Some(data),
                errors: None,
            })
        })
        .map_err(|_| HttpResponse::InternalServerError())?;

    Ok(res)
}

fn get_all_categories(
    db: &web::Data<Pool>,
) -> Result<Vec<Category>, diesel::result::Error> {
    let conn = db.get().unwrap();
    let result = categories.load::<Category>(&conn)?;
    Ok(result)
}
