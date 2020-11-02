// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

use serde::Deserialize;
use yew::{
    agent::Bridged,
    html,
    Bridge,
    Children,
    Component,
    ComponentLink,
    Html,
    Properties,
    ShouldRender
};
use yew_router::prelude::*;

use crate::routes::PlumaRoute;
use crate::util::fix_fragment_routes;

#[derive(Deserialize)]
struct Plugin {
    id: u32,
    name: String,
    description: String,
    category_id: u32,
    category_name: String,
    language_name: String,
    github_url: String,
}

pub enum PlumaMsg {
    Route(Route),
    Click,
}

#[derive(Clone, Properties, PartialEq)]
pub struct PlumaProps {
    #[prop_or_default]
    pub children: Children,
    // #[prop_or_default]
    // pub route: Option<PlumaRoute>,
}

pub struct PlumaComponent {
    categories: Vec<String>,
    current_route: Option<PlumaRoute>,
    link: ComponentLink<Self>,
    #[allow(unused)]
    router_agent: Box<dyn Bridge<RouteAgent>>,
}

impl Component for PlumaComponent {
    type Message = PlumaMsg;
    type Properties = PlumaProps;

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let router_agent = RouteAgent::bridge(link.callback(PlumaMsg::Route));
        let route_service = RouteService::new();
        let mut route = route_service.get_route();
        fix_fragment_routes(&mut route);
        Self {
            categories: Vec::new(),
            current_route: PlumaRoute::switch(route),
            link,
            router_agent: router_agent,
        }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
            <ybc::Column classes="is-three-quarters">
                { self.home_partial() }
            </ybc::Column>
            <ybc::Column classes="is-one-quarter">
                { self.sidebar_partial() }
            </ybc::Column>
            </>
        }
    }
}

impl PlumaComponent {
    pub fn home_partial(&self) -> Html {
        html! {
            <ybc::Content>
                <h2>{"PluMA: "}
                    <strong class="text-alternate">{"Plu"}</strong>{"gin-Based "}
                    <strong class="text-alternate">{"M"}</strong>{"icrobiome "}
                    <strong class="text-alternate">{"A"}</strong>{"nalysis"}
                </h2>
                <ybc::Section
                //id="people"
                >
                    <h3>{"People"}</h3>
                    <p><strong>{"Principal Investigator: "}</strong>{"Prof. Giri Narasimhan"}</p>
                    <p><strong>{"Pipeline Architect: "}</strong>{"Dr. Trevor Cickovski"}</p>
                </ybc::Section>
                <ybc::Section
                //id="abstract"
                >
                    <h3>{"Abstract"}</h3>
                    <p>{"Our goal with PluMA is to facilitate the construction of flexible and lightweight analysis pipelines through which a developer can implement a new algorithm in their programming language of choice, and easily test and debug within a larger pipeline alongside stages in different languages that potentially use different file formats."}</p>
                    <p>{"PluMA accomplishes this through "}<em>{"plugins"}</em>{", and has a large collection available in its "}<a>{"plugin pool"}</a>{", implemented in various programming languages for both the CPU and GPU. Plugins can be run sequentially to form a pipeline, and can be easily added, removed or substituted through our user interface. Since plugins are dynamically loaded, you can assemble a pipeline by downloading "}<a href="https://github.com/FIUBioRG/PluMA/">{"PluMA"}</a>{" and only the plugins that you need from the pool."}</p>
                    <p><em>{"Note: Our software should not be confused with the PluMa Plugin Management system, and we have no connections or competing interests with PluMa."}</em></p>
                    <p><em>{"Note: PluMA is now a part of OMICTools! Visit their "}<a href="https://omictools.com/blog/test-your-microbiome-analysis-pipeline-with-pluma">{"site"}</a>{" for details."}</em></p>
                </ybc::Section>
                <ybc::Section
                //id="citations"
                >
                    <h3>{"Citations"}</h3>
                    <p>
                        <strong>{"Cickovski, T., Narasimhan, G."}</strong>{" (2018) "}
                        <strong>{"Constructing Lightweight and Flexible Pipelines Using Plugin-Based Microbiome Analysis (PluMA)"}</strong>{", "}
                        <em>{"Bioinformatics"}</em>{ "34(17):2881-2888, 2018."}
                    </p>
                    <p>
                        <strong>{"Cickovski, T., Aguiar-Pulido, V., Huang, W., Mahmud, S., Narasimhan, G."}</strong>{" (2016). "}
                        <strong>{"Lightweight Microbiome Analysis Pipelines, "}</strong>
                        <em>{"In Proceedings of International Work Conference on Bioinformatics and Biomedical Engineering (IWBBIO'16)"}</em>
                    </p>
                </ybc::Section>
            </ybc::Content>
        }
    }

    pub fn sidebar_partial(&self) -> Html {
        html! {
            <ybc::Menu>
                <ybc::MenuLabel text="Download PluMA"></ybc::MenuLabel>
                <ybc::MenuList>
                    <li>
                        <a>{"PluMA Home"}</a>
                    </li>
                    <li>
                        <a href="https://github.com/FIUBioRG/PluMA" target="_blank">{"PluMA Github Site"}</a>
                    </li>
                    <li>
                        <a href="#">{"PluMA Userguide"}</a>
                    </li>
                    <li>
                        <a>{"PluMA Plugin Pool"}</a>
                    </li>
                    <li>
                        <a>{"PluMA Pipeline Pool"}</a>
                    </li>
                </ybc::MenuList>
            </ybc::Menu>
        }
    }

    pub fn plugins_partial(&self) -> Html {
        html! {
            <ybc::Content>
                <ybc::Section
                // id="header"
                >
                    <h2>{"Plugin Pool"}</h2>
                    <p>{"These plugins have been tested and are compatible with the latest version of PluMA. You can download just the ones you wish to use."}</p>
                    <p>{"The easiest way to install them is to place them in the plugins/ directory of the PluMA source tree, however you can install them elsewhere by setting the environment variable "}<code>{"PLUMA_PLUGIN_PATH."}</code></p>
                    <p>{"Have a new plugin that you would like to add to the pool? Please send your source code and a description to Trevor Cickovski. All plugins in the pool will be added as test cases for future releases of PluMA, giving you automatic forward compatibility!"}</p>
                </ybc::Section>
                <ybc::Section
                    // id="plugins"
                >
                    <ybc::Columns>
                        <ybc::Column classes="is-4">
                            <ybc::Menu>
                                <ybc::MenuLabel text="PluMA Plugin Repositories" />
                                <ybc::MenuList>
                                    // <li *ngFor="let category of getCategories()">
                                    //     <a [ngClass]="{ 'is-active': isLinkActive(category.id) }"
                                    //         (click)="setLinkActive(category.id)">{{ category.name }}</a>
                                    // </li>
                                </ybc::MenuList>
                            </ybc::Menu>
                        </ybc::Column>
                        <ybc::Column>
                            <ybc::Table hoverable=true fullwidth=true>
                                <thead>
                                    <tr>
                                        <th>{"Name"}</th>
                                        <th>{"Description"}</th>
                                        <th>{"Language"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    // <tr *ngFor="let plugin of getPlugins()">
                                    //     <td>
                                    //     <span class="panel-block">
                                    //         <span class="panel-icon">
                                    //         <i class="fas fa-book" aria-hidden="true"></i>
                                    //         </span>
                                    //         <a href="{{ plugin.github_url }}">{{ plugin.name }}</a>
                                    //     </span>
                                    //     </td>
                                    //     <td>
                                    //     <span class="panel-block">{{ plugin.description }}</span>
                                    //     </td>
                                    //     <td>
                                    //     <span class="panel-block">{{ plugin.language_name }}</span>
                                    //     </td>
                                    // </tr>
                                    </tr>
                                </tbody>
                            </ybc::Table>
                        </ybc::Column>
                    </ybc::Columns>
                </ybc::Section>
            </ybc::Content>
        }
    }
}
