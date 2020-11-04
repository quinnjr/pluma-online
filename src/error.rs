// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{error, HttpResponse, ResponseError};
use anyhow::{};
use derive_more::Display;
use serde::{Deserialize, Serialize};
use thiserror::Error;

#[derive(Clone, Debug, Deserialize, Error, Serialize)]
pub enum ServiceError {
    #[error("Internal Server Error: {0}")]
    Internal(String),

    #[error("Bad Request: {0}")]
    BadRequest(String),

    #[error("Unauthorized")]
    Unauthorized,

    #[error("JWT Error: {0}")]
    JWTError(String),

    #[error("Registration Error: {0}")]
    RegistrationError(String),
}

impl ResponseError for ServiceError {
    fn error_response(&self) -> HttpResponse {
        match *self {
            ServiceError::Internal(_) => HttpResponse::InternalServerError()
                .json("Internal Server Error, Please try later"),
            ServiceError::BadRequest(ref message) => {
                HttpResponse::BadRequest().json(message)
            }
            ServiceError::Unauthorized => todo!(),
            ServiceError::JWTError(ref message) => todo!(),
            ServiceError::RegistrationError(ref message) => todo!(),
        }
    }
}

impl From<diesel::result::Error> for ServiceError {
    fn from(error: diesel::result::Error) -> Self {
        Self::Internal(error.to_string())
    }
}

impl From<r2d2::Error> for ServiceError {
    fn from(error: r2d2::Error) -> Self {
        Self::Internal(error.to_string())
    }
}
