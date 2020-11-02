// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime  as DateTime;
use diesel::{
    backend::Backend,
    deserialize::{self, FromSql},
    serialize::ToSql,
    sql_types::Bool,
    Queryable
};
use serde::{Deserialize, Serialize};
use serde_json::Value;

use crate::schema::*;

/// JSON:Api specification compliant model.
#[derive(Clone, Debug, Deserialize, Serialize)]
pub(crate) struct JsonResponse {
    data: Vec<Value>,
    errors: Option<Vec<Value>>,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Categories {
    id: i32,
    name: String,
    created_at: DateTime,
    updated_at: DateTime,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Languages {
    id: i32,
    name: String,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct People {
    id: i32,
    name: String,
    role_id: i32,
    title: String,
    speciality: String,
    profile_picture: Option<String>,
    url: Option<String>,
    created_at: DateTime,
    updated_at: DateTime,
}

#[derive(Clone, Debug, FromSqlRow, Deserialize, Serialize)]
pub(crate) enum PipelineStatus {
    Private = 0,
    Public = 1,
}

impl<DB> FromSql<Bool, DB> for PipelineStatus
    where DB: Backend,
    bool: FromSql<Bool, DB>,
{
    fn from_sql(bytes: Option<&DB::RawValue>)-> deserialize::Result<Self> {
        match i32::from_sql(bytes)? {
            0 => Ok(Self::Private),
            1 => Ok(Self::Public),
            x => Err(format!("Unrecognized variant {}", x).into())
        }
    }

}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Pipelines {
    id: i32,
    name: String,
    description: String,
    github_url: String,
    status: PipelineStatus,
    created_at: DateTime,
    updated_at: DateTime,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Plugins {
    id: i32,
    name: String,
    category_id: i32,
    description: String,
    github_url: String,
    language_id: i32,
    created_at: DateTime,
    updated_at: DateTime,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Publications {
    id: i32,
    author: String,
    title: String,
    advance_info: Option<String>,
    publish_date: DateTime,
    publisher: Option<String>,
    version: Option<String>,
    url: Option<String>,
    date_accessed: Option<DateTime>,
    annotation: Option<String>,
    created_at: DateTime,
    updated_at: DateTime,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Roles {
    id: i32,
    name: String,
}

#[derive(Queryable, Deserialize, Serialize)]
pub(crate) struct Users {
    id: i32,
    email: String,
    password_hash: String,
    created_at: DateTime,
    updated_at: DateTime,
}
