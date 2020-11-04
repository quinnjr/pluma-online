// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

#![cfg_attr(debug_assertions, allow(unused_imports))]
#![cfg_attr(not(debug_assertions), deny(unused_imports))]
#![recursion_limit = "1024"]

use ybc;
use yew::{
    agent::Bridged, html, Bridge, Component, ComponentLink, Html, ShouldRender,
};
use yew_router::{
    agent::{
        RouteAgent, RouteRequest::ChangeRoute, RouteRequest::GetCurrentRoute,
    },
    matcher::RouteMatcher,
    prelude::*,
};

pub(crate) mod components;
pub(crate) mod constants;
pub(crate) mod error;
pub(crate) mod modules;
pub(crate) mod routes;
pub(crate) mod services;
pub(crate) mod util;

use crate::error::ErrorKind;
use crate::modules::auth::AuthComponent;
use crate::modules::software::pluma::PlumaComponent;
use crate::routes::{AppRoute, AuthRoute, PlumaRoute};
use crate::services::auth::Auth;
use crate::util::fix_fragment_routes;

pub type Result<T = ()> = anyhow::Result<T>;

pub enum Msg {
    Ignore,
    Route(Route),
    Authenticated,
}

pub struct Application {
    auth: Auth,
    current_route: Option<AppRoute>,
    link: ComponentLink<Self>,
    #[allow(unused)]
    router_agent: Box<dyn Bridge<RouteAgent>>,
}

impl Component for Application {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        let router_agent = RouteAgent::bridge(link.callback(Msg::Route));

        let route_service = RouteService::new();

        let mut route = route_service.get_route();

        fix_fragment_routes(&mut route);

        Self {
            auth: Auth {},
            current_route: AppRoute::switch(route),
            link: link,
            router_agent: router_agent,
        }
    }

    fn rendered(&mut self, first_render: bool) {
        // if first_render {
        //     todo!()
        // }
    }

    fn change(&mut self, _: Self::Properties) -> bool {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Ignore => false,
            Msg::Route(mut route) => {
                fix_fragment_routes(&mut route);
                self.current_route = AppRoute::switch(route);
                true
            }
            Msg::Authenticated => false,
        }
    }

    fn view(&self) -> Html {
        html! {
            <>
            <ybc::Navbar
                classes="has-shadow"
                navburger=true
                navbrand=html! {
                    <>
                        <a class="navbar-item" href="#/">
                            <img src="/assets/logo.png" alt="FIUBioRG" />
                        </a>
                    </>
              }
              navstart=html!{
                <>
                    <ybc::NavbarItem tag=ybc::NavbarItemTag::A href="/"
                        active=true>
                        { "Home" }
                    </ybc::NavbarItem>
                    <ybc::NavbarItem tag=ybc::NavbarItemTag::A href="/people">
                        { "People" }
                    </ybc::NavbarItem>
                </>
              }
            />
            <ybc::Container fluid=true>
                <ybc::Columns>
                    <Router<AppRoute, ()>
                        render = Router::render(|switch: AppRoute| {
                            match switch {
                                AppRoute::Index => {
                                    html!{
                                        <>
                                        <ybc::ButtonAnchorRouter<AppRoute> classes="is-primary"
                                            route=AppRoute::Auth(AuthRoute::Login)>
                                            { "Login Form" }
                                        </ybc::ButtonAnchorRouter<AppRoute>>
                                        <ybc::ButtonAnchorRouter<AppRoute> classes="is-primary"
                                            route=AppRoute::Pluma(PlumaRoute::Index)>
                                            { "PluMA" }
                                        </ybc::ButtonAnchorRouter<AppRoute>>
                                        </>
                                    }
                                },
                                AppRoute::Auth(sub) => {
                                    html!{
                                        <AuthComponent route=sub />
                                    }
                                },
                                AppRoute::Pluma(pluma_route) => {
                                    html!{
                                        <PlumaComponent />
                                    }
                                }
                            }
                        })
                    />
                </ybc::Columns>
            </ybc::Container>
            </>
        }
    }
}

// impl Application {
//     /// Fetch JSON from a valid JSON source.
//     fn fetch_json(&mut self, url: String, binary: bool) -> FetchTask {
//         let cb = self.link.callback(
//             move |response: Response<Json<Result>>| {
//                 let (meta, Json(data)) = response.into_parts();

//                 if meta.status.is_success() {
//                     Msg::FetchReady(data)
//                 } else {
//                     Msg::Ignore // @TODO: Appropriate error handling.
//                 }
//             }
//         );

//         let request = Request::get(url).body(Nothing).unwrap();

//         if binary {
//             FetchService::fetch_binary(request, cb).unwrap()
//         } else {
//             FetchService::fetch(request, cb).unwrap()
//         }
//     }
// }
