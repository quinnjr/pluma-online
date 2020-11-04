// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use std::io::Write;

use diesel::{backend::Backend, deserialize, serialize, sql_types::SmallInt, Queryable};
use serde::{Deserialize, Serialize};

#[derive(Clone, Copy, Debug, Deserialize, Serialize)]
pub enum Role {
    Inaccessible = -1,
    User,
    Admin,
}

impl<DB> serialize::ToSql<SmallInt, DB> for Role
where
    DB: Backend,
    i16: serialize::ToSql<SmallInt, DB>,
{
    fn to_sql<W: Write>(&self, out: &mut serialize::Output<W, DB>) -> serialize::Result {
        (*self as i16).to_sql(out)
    }
}

impl<DB> deserialize::FromSql<SmallInt, DB> for Role
where
    DB: Backend,
    i16: deserialize::FromSql<SmallInt, DB>
{
    fn from_sql(bytes: Option<&DB::RawValue>) -> deserialize::Result<Role> {
        match i16::from_sql(bytes)? {
            -1 => Ok(Role::Inaccessible),
            0 => Ok(Role::User),
            1 => Ok(Role::Admin),
            x => Err(format!("Unrecognized variant {}", x).into()),
        }
    }
}
