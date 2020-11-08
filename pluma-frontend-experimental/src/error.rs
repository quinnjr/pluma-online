// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use thiserror::Error;

#[derive(Clone, Error, PartialEq, Debug)]
pub enum ErrorKind {
    #[error("Unable to deserialize the input JSON")]
    DeserializeError,
    /// 401 error
    #[error("You are not authorized to view this resource")]
    Unauthorized,
    /// 403 error
    #[error("Access to this resource is forbidden")]
    Forbidden,
    /// 404 error
    #[error("The requested resource could not be found")]
    NotFound,
    /// 500 error
    #[error("The server returned an internal error")]
    InternalServerError,
    /// Some Javascript error
    #[error("Javascript Error: {0}")]
    JsError(String),
}
