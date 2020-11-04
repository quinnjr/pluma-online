// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime as DateTime;
use diesel::Queryable;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Deserialize, Serialize)]
pub struct Plugin {
    pub id: i32,
    pub name: String,
    pub category_id: i32,
    pub description: String,
    pub github_url: String,
    pub language_id: i32,
    pub created_at: DateTime,
    pub updated_at: DateTime,
}
