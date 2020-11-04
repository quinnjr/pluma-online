// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{Error, HttpRequest, HttpResponse, Responder};
use futures::future::{ready, Ready};
use serde::{Deserialize, Serialize};

use crate::error::ServiceError;

/// JSON:Api specification compliant model.
#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct JsonResponse<T = ()> {
    pub data: Option<T>,
    pub errors: Option<Vec<ServiceError>>,
}

impl<T: Serialize> Responder for JsonResponse<T> {
    type Error = Error;
    type Future = Ready<Result<HttpResponse, Error>>;

    fn respond_to(self, _req: &HttpRequest) -> Self::Future {
        let body = serde_json::to_string(&self).unwrap();

        ready(Ok(HttpResponse::Ok()
            .content_type("application/json")
            .body(body)))
    }
}
