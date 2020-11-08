// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use yew_router::prelude::*;

pub(crate) fn fix_fragment_routes(route: &mut Route) {
    let r = route.route.as_str();

    if let Some(idx) = r.find('#') {
        route.route = r[idx..].to_string();
    } else {
        route.route = "#/".to_string();
    }
}
