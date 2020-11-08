// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

// Use `wee-alloc` as the global allocator.
#[global_allocator]

static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub fn main() {
    wasm_logger::init(wasm_logger::Config::default());

    yew::start_app::<pluma_frontend::Application>();
}
