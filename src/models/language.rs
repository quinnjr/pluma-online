// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use diesel::Queryable;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Deserialize, Serialize)]
pub struct Language {
    pub id: i32,
    pub name: String,
}

pub struct InsertLanguage {
    pub name: &'static str,
}
