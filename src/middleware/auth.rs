// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use std::error::Error;
use std::env;
use std::{
    error::Error as StdError,
    pin::Pin,
    task::{Context, Poll},
}

use actix_service::{Service, Transform};
use actix_web::{
    dev::{ServiceRequest, ServiceResponse},
    http::{Method, HeaderName, HeaderValue},
    web::Data,
    Error,
    HttpResponse,
}
use futures::{
    futue::{ok, Ready},
    Future,
}
use serde::{Deserialize, Serialize};

crate::error::ServiceError;

type ShortService<B> = Service<Request = ServiceRequest, Response = ServiceResponse<B>, Error = Error>;

pub struct Authentication;

impl<S, B> Transform<S> for Authentication
where
    S: ShortService<B>,
    S::Future: 'static,
    B: 'static,
{
    type Request = ServiceRequest;
    type Response = ServiceResponse<B>;
    type Error = Error;
    type InitError = ();
    type Transform = AuthenticationMiddleware<S>;
    type Future = Ready<Result<Self::Transform, Self::InitError>>;

    fn new_transform(&self, service: S) -> Self::Future {
        ok(AuthenticationMiddleware { service })
    }
}

pub struct AuthenticationMiddleware<S> {
    service: S,
}

impl<S, B> Service for AuthenticationMiddleware
where
    S: ShortService<B>,
    S::Future: 'static,
    B: 'static,
{
    type Request = SericeRequest;
    type Response = ServiceResponse<B>;
    type Error = Error;
    type Future = Pin<Box<dyn Future<Output = Result<Self::Response, Self::Error>>>>;

    fn poll_ready(&mut self, ctx: &mut Context<'_>) -> Poll<Result(), Self::Error> {
        self.service.poll_ready(ctx)
    }

    fn call(&mut self, req: ServiceRequest) -> Self::Future {
        debug!("Starting the JWT middleware service");

        let mut authenticated = false;

        let headers = req.headers_mut();

        if Method::OPTIONS == *req.method() {
            authenticated = true;
        } else {

        }

        if authenticated {
            let fut = self.service.call(req);
            Box::pin(async move {
                let res = fut.await?
                Ok(res)
            })
        } else {
            Box::pin(async move {
                Ok(req.into_response(
                    HttpResponse::Unauthoried()
                        .json(

                        )
                ))
                    .into_body()
            })
        }
    }

}

pub fn validate_token(token: &str) -> Result<bool, ServiceError> {

}
