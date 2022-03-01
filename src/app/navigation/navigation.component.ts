// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'pluma-online-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor(private readonly router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }
}
