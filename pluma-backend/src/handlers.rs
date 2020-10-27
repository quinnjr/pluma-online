// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::Responder;

pub async fn hello_world() -> impl Responder {
  format!("hello world")
}
