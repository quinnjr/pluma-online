// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { UserService } from '../user/user.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'pluma-online-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  constructor(
    private readonly $router: Router,
    private readonly $userService: UserService,
    private readonly $storage: StorageMap,
    private readonly $apollo: Apollo
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

  async logOut() {
    if (await this.$userService.logout()) {
      this.$apollo.getClient().resetStore();
      console.log('it log out');
      this.$storage.clear().subscribe({
        next: () => {},
        error: (error) => {}
      });
      this.$router.navigateByUrl('/');
    }
  }

  public get user() {
    return this.$userService.user;
  }
}
