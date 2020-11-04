// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use std::env;

use argonautica::{Hasher, Verifier};
use actix_web::{post, web, Error, HttpRequest, HttpResponse};
use chrono::{Duration, Local};
use diesel::{dsl::delete, insert_into, QueryDsl, RunQueryDsl};
use jsonwebtoken::{
    decode, encode, DecodingKey, EncodingKey, Header, Validation,
};
use serde::{Deserialize, Serialize};

use crate::{
    constants, error::ServiceError, models::{Role, User, SlimUser, InsertUser}, response::JsonResponse,
    schema::users::dsl, Pool,
};

lazy_static::lazy_static! {
    pub static ref JWT_SECRET: String = env::var("JWT_SECRET").expect("JWT_SECRET must be defined");
}

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    /// Non-statndard Email key. Manual Validation must be performed.
    email: String,
    /// Expiry
    exp: i64,
    /// Isssued At
    iat: i64,
    /// Issuer
    iss: String,
    /// Not-Before
    nbf: i64,
    /// Non-standard Roles key. Manual validation must be preformed.
    roles: Vec<Role>,
    /// Subject
    sub: String,
}

impl Claims {
    fn new(email: String, roles: Vec<Role>) -> Self {
        let exp = (Local::now() + Duration::hours(24)).timestamp().into();
        let iat = Local::now().timestamp().into();
        let iss = constants::ISSUER.to_string();
        let nbf = (Local::now() + Duration::milliseconds(10))
            .timestamp()
            .into();
        let sub = String::from("auth");

        Self {
            email,
            exp,
            iat,
            iss,
            nbf,
            roles,
            sub,
        }
    }
}

impl From<User> for Claims {
    fn from(user: User) -> Self {
        Claims::new(user.email, user.roles)
    }
}

/// Hash a password.
fn hash_password(password: &str) -> Result<String, ServiceError> {
    Hasher::default()
        .with_password(password)
        .with_secret_key(JWT_SECRET.as_str())
        .hash()
        .map_err(|err| ServiceError::Internal(err.to_string()))
}

/// Verify a password
fn verify(hash: &str, password: &str) -> Result<bool, ServiceError> {
    Verifier::default()
        .with_hash(hash)
        .with_password(password)
        .with_secret_key(JWT_SECRET.as_str())
        .verify()
        .map_err(|err| ServiceError::Unauthorized)
}

/// Create a JWT token.
fn encode_token(user: User) -> Result<String, ServiceError> {
    // @TODO: add roles parsing
    let claims: Claims = user.into();

    encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(JWT_SECRET.as_bytes()),
    )
    .map_err(|_| ServiceError::JWTError("Failed to encode the JWT".into()))
}

/// Decode a JWT token for authentication.
fn decode_token(token: &str) -> Result<Claims, ServiceError> {
    decode::<Claims>(
        token,
        &DecodingKey::from_secret(JWT_SECRET.as_bytes()),
        &Validation::default(),
    )
    .map(|data| Ok(data.claims))
    .map_err(|_| ServiceError::Unauthorized)?
}

#[derive(Deserialize)]
pub struct LoginForm {
    pub email: String,
    pub password: String,
}

#[post("/login")]
pub async fn login_action(
    request: HttpRequest,
    db: web::Data<Pool>,
    form: web::Json<LoginForm>,
) -> Result<HttpResponse, Error> {
    let res = web::block(move || login(&db, &form))
        .await
        .map(|data| {
            HttpResponse::Ok().json(JsonResponse {
                data: Some(data),
                errors: None,
            })
        })
        .map_err(|_| HttpResponse::InternalServerError())?;

    Ok(res)
}

fn login(
    db: &web::Data<Pool>,
    form: &web::Json<LoginForm>,
) -> Result<(), diesel::result::Error> {
    Ok(())
}

#[derive(Eq, PartialEq, Deserialize)]
pub struct RegisterForm {
    pub email: String,
    pub password: String,
}

#[post("/register")]
pub async fn register_action(
    request: HttpRequest,
    db: web::Data<Pool>,
    form: web::Json<RegisterForm>,
) -> Result<HttpResponse, Error> {
    let res = web::block(move || query_register(&db, form.into_inner()))
    .await
    .map(|data| {
        HttpResponse::Ok().json(JsonResponse {
            data: Some(data),
            errors: None,
        })
    })
    .map_err(|err| {
        let error = ServiceError::RegistrationError(err.to_string());
        HttpResponse::InternalServerError().json(JsonResponse::<()> {
            data: None,
            errors: Some(vec![error]),
        })
    })?;

    Ok(res)
}

fn query_register(db: &web::Data<Pool>, form: RegisterForm) -> Result<SlimUser, ServiceError> {
    use crate::schema::users::dsl::*;

    let conn = db.get()?;

    let password = hash_password(&form.password)?;
    let user = InsertUser::from_details(form.email, password);

    let inserted_user: User = diesel::insert_into(users).values(&user).get_result(&conn)?;

    Ok(inserted_user.into())
}
