// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { UserService } from '../user/user.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'pluma-online-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor(
    private readonly $router: Router,
    private readonly $userService: UserService,
    private readonly $storage: StorageMap
  ) {}

  public ngOnInit() {
    this.$storage.get('user').subscribe((user) => {
      console.log(user);
      if (user !== undefined) {
        console.log('WTFFFFFFFFF');
        this.$userService.login(user);
      }
    });

    this.$router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
    });
  }

  logOut() {
    this.$userService.logout();
    this.$storage.clear().subscribe({
      next: () => {},
      error: (error) => {}
    });
  }

  public get user() {
    return this.$userService.user;
  }
}
