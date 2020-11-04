// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{get, web, Error, HttpResponse};
use diesel::{
    dsl::delete, insert_into, ExpressionMethods, QueryDsl, RunQueryDsl,
};
use serde::{Deserialize, Serialize};

use crate::models::Plugin;
use crate::response::JsonResponse;
use crate::schema::plugins::dsl::*;
use crate::Pool;

#[get("")]
pub async fn get_action(db: web::Data<Pool>) -> Result<HttpResponse, Error> {
    let res = web::block(move || get_all_plugins(&db))
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

fn get_all_plugins(
    db: &web::Data<Pool>,
) -> Result<Vec<Plugin>, diesel::result::Error> {
    let conn = db.get().unwrap();
    let result = plugins.load::<Plugin>(&conn)?;
    Ok(result)
}

#[get("/{cid}")]
pub async fn get_by_category_id_action(
    db: web::Data<Pool>,
    cid: web::Path<i32>,
) -> Result<HttpResponse, Error> {
    let res = web::block(move || get_by_category_id(&db, *cid))
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

fn get_by_category_id(
    db: &web::Data<Pool>,
    cid: i32,
) -> Result<Vec<Plugin>, diesel::result::Error> {
    let conn = db.get().unwrap();
    plugins.filter(category_id.eq(cid)).load::<Plugin>(&conn)
}
