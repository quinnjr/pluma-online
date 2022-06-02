// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'pluma-online-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor(
    private readonly $router: Router,
    private readonly $userService: UserService
  ) {}

  public ngOnInit() {
    this.$router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }

  public get user() {
    return this.$userService.user;
  }
}
