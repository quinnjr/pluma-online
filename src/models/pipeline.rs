// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use chrono::NaiveDateTime  as DateTime;
use diesel::{
    backend::Backend,
    deserialize::{self, FromSql},
    serialize::{self, ToSql},
    sql_types::Bool,
    Queryable
};
use serde::{Deserialize, Serialize};

#[derive(AsExpression, Clone, Debug, FromSqlRow, Deserialize, Serialize)]
#[sql_type = "Bool"]
pub enum PipelineStatus {
    Private,
    Public,
}

impl<DB> FromSql<Bool, DB> for PipelineStatus
where
    DB: Backend,
    bool: FromSql<Bool, DB>,
{
    fn from_sql(bytes: Option<&DB::RawValue>)-> deserialize::Result<Self> {
        match <bool as FromSql<Bool, DB>>::from_sql(bytes)? {
            false => Ok(Self::Private),
            true => Ok(Self::Public),
        }
    }

}

impl<DB> ToSql<Bool, DB> for PipelineStatus
where
    DB: Backend,
    bool: ToSql<Bool, DB>
{
    fn to_sql<W: std::io::Write>(&self, out: &mut serialize::Output<W, DB>) -> serialize::Result {
        match *self {
            PipelineStatus::Private => false.to_sql(out),
            PipelineStatus::Public => true.to_sql(out)
        }
    }
}

#[derive(Queryable, Deserialize, Serialize)]
pub struct Pipeline {
    pub id: i32,
    pub name: String,
    pub description: String,
    pub github_url: String,
    pub status: PipelineStatus,
    pub created_at: DateTime,
    pub updated_at: DateTime,
}
