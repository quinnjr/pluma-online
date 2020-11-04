// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use std::collections::HashMap;

use anyhow::Result;
use log::{debug, info};
use serde::{Deserialize, Serialize};
use yew::{
    agent::Bridged, html, Bridge, Children, Component, ComponentLink, Html,
    Properties, ShouldRender,
};
use yew_router::prelude::*;

use crate::constants::SECRET;
use crate::error::ErrorKind;
use crate::fix_fragment_routes;
use crate::routes::{AppRoute, AuthRoute};

pub struct AuthComponent {
    current_route: Option<AppRoute>,
    form_data: HashMap<&'static str, String>,
    link: ComponentLink<Self>,
    props: AuthProps,
}

pub enum AuthMsg {
    Route(Route),
    FormUpdate(&'static str, String),
}

#[derive(Clone, Properties, PartialEq)]
pub struct AuthProps {
    #[prop_or_default]
    pub children: Children,
    // #[prop_or_default]
    pub route: AuthRoute,
}

impl Component for AuthComponent {
    type Message = AuthMsg;
    type Properties = AuthProps;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let router_agent = RouteAgent::bridge(link.callback(AuthMsg::Route));

        let route_service = RouteService::new();

        let mut route = route_service.get_route();

        fix_fragment_routes(&mut route);

        Self {
            current_route: AppRoute::switch(route),
            form_data: HashMap::new(),
            link,
            props,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            AuthMsg::Route(_) => false,
            AuthMsg::FormUpdate(key, val) => {
                debug!("Form update: {} = {}", key, val);
                self.form_data.insert(key, val);
                true
            }
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <ybc::Column classes="is-three-fifths is-offset-one-fifth">
                <ybc::Box>
                     <ybc::Tabs classes="is-fullwidth is-toggle">
                        <li class="is-active">
                            <a>{"Login"}</a>
                        </li>
                        <li>
                            <a>{"Register"}</a>
                        </li>
                    </ybc::Tabs>
                    { match self.props.route {
                        AuthRoute::Login => {
                            self.login_parital()
                        },
                        AuthRoute::Register => {
                            html! {

                            }
                        }
                    }}
                </ybc::Box>
            </ybc::Column>
        }
    }
}

use hmac::{Hmac, Mac, NewMac};
use sha2::Sha256;

type HmacSha256 = Hmac<Sha256>;

impl AuthComponent {
    pub fn login_parital(&self) -> Html {
        html! {
            <form class="form">
                <ybc::Field label={"Email"}>
                    <ybc::Control expanded=true>
                        <ybc::Input name={"email"} value=self.form_value("email")
                            update=self.link.callback(|val| AuthMsg::FormUpdate("email", val))
                            placeholder={"you@example.com"}
                        >
                        </ybc::Input>
                    </ybc::Control>
                </ybc::Field>
                {
                    if cfg!(debug_assertions) {
                        html! {
                            <span hidden=self.form_data.is_empty()>
                                {
                                    self.form_data.iter()
                                        .map(|(k, v)| {
                                            html!{<span>{format!("{} = {}", k, v)}</span>}
                                        })
                                        .collect::<Html>()
                                }
                            </span>
                        }
                    } else {
                        html!{}
                    }
                }
            </form>
        }
    }

    pub fn form_value(&self, field: &str) -> String {
        if let Some(data) = self.form_data.get(field) {
            data.clone()
        } else {
            String::new()
        }
    }

    pub async fn calc_hmac(msg: &String) -> Result<String> {
        let mut mac = HmacSha256::new_varkey(SECRET)
            .expect("HMAC can take key of any size");

        mac.update(msg.as_bytes());

        let result = mac.finalize();

        let bytes = result.into_bytes();

        Ok(String::from_utf8(bytes.to_vec())?)
    }
}
