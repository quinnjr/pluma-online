// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use actix_web::{dev::RequestHead, guard::Guard, http, HttpResponse};

struct JWTGuard;

impl Guard for JWTGuard {
    fn check(&self, req: &RequestHead) -> bool {
        true
    }
}
