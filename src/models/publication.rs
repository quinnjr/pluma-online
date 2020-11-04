// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime as DateTime;
use diesel::Queryable;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Deserialize, Serialize)]
pub struct Publication {
    pub id: i32,
    pub author: String,
    pub title: String,
    pub advance_info: Option<String>,
    pub publish_date: DateTime,
    pub publisher: Option<String>,
    pub version: Option<String>,
    pub url: Option<String>,
    pub date_accessed: Option<DateTime>,
    pub annotation: Option<String>,
    pub created_at: DateTime,
    pub updated_at: DateTime,
}
