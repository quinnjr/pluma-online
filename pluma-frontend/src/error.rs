// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use std::fmt;

use failure::{ Backtrace, Context, Fail };

#[derive(Copy, Clone, Eq, PartialEq, Debug, Fail)]
enum ErrorKind {
    #[fail(display = "Unable to deserialize the input JSON")]
    DeserializeError,
    /// 401 error
    #[fail(display = "You are not authorized to view this resource")]
    Unauthorized,
    /// 403 error
    #[fail(display = "Access to this resource is forbidden")]
    Forbidden,
    /// 404 error
    #[fail(display = "The requested resource could not be found")]
    NotFound,
    /// 500 error
    #[fail(display = "The server returned an internal error")]
    InternalServerError,
}

#[derive(Debug)]
pub struct Error {
    inner: Context<ErrorKind>,
}

impl Fail for Error {
    fn cause(&self) -> Option<&dyn Fail> {
        self.inner.cause()
    }

    fn backtrace(&self) -> Option<&Backtrace> {
        self.inner.backtrace()
    }
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        fmt::Display::fmt(&self.inner, f)
    }
}
