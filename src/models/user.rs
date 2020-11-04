// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime as DateTime;
use diesel::{Insertable, Queryable};
use serde::{Deserialize, Serialize};

use crate::models::Role;
use crate::schema::users;

#[derive(Queryable, Deserialize, Serialize)]
pub struct User {
    pub id: i32,
    pub email: String,
    pub password_hash: String,
    #[serde(default)]
    pub roles: Vec<Role>,
    pub created_at: DateTime,
    pub updated_at: DateTime,
}

#[derive(Insertable, Deserialize)]
#[table_name = "users"]
pub struct InsertUser {
    pub email: String,
    pub password_hash: String,
}

impl InsertUser {
    pub fn from_details<S: Into<String>, T: Into<String>>(email: S, password: T) -> Self {
        Self {
            email: email.into(),
            password_hash: password.into(),
        }
    }
}

#[derive(Deserialize, Serialize)]
pub struct SlimUser {
    pub email: String,
    pub roles: Vec<Role>,
}

impl Into<SlimUser> for User {
    fn into(self) -> SlimUser {
        SlimUser {
            email: self.email,
            roles: self.roles,
        }
    }
}
