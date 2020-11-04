// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime as DateTime;
use diesel::Queryable;
use serde::{Deserialize, Serialize};

#[derive(Queryable, Deserialize, Serialize)]
pub struct Person {
    pub id: i32,
    pub name: String,
    pub role_id: i32,
    pub title: String,
    pub speciality: String,
    pub profile_picture: Option<String>,
    pub url: Option<String>,
    pub created_at: DateTime,
    pub updated_at: DateTime,
}
