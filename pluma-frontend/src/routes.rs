// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

//! Routes generated by yew-router

use yew_router::prelude::*;

/// App routes
#[derive(Switch, Clone, PartialEq)]
pub enum AppRoute {
    #[to="/pluma"]
    Pluma(PlumaRoute),
    #[to="/!"]
    Index,
}

/// PluMA routes
#[derive(Switch, Clone, PartialEq)]
pub enum PlumaRoute {
    #[to="/plugins"]
    Plugins,
    #[to="/pipelines"]
    Pipelines,
    #[to="/!"]
    Index,
}
