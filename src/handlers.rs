// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::Responder;

pub async fn index() -> impl Responder {
    format!("Here be dragons")
}
