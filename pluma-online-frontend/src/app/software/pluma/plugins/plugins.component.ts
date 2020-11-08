// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Observable, Subscriber, of } from 'rxjs';
import { DateTime } from 'luxon';
import noop from 'lodash.noop';

import { BackendService, BackendResponse } from '../../../backend.service';
import { SessionStorageService, CacheItem } from '../../../session-storage.service';

import { Category } from '../category';
import { Plugin } from '../plugin';

@Component({
  selector: 'biorg-pluma-plugins',
  templateUrl: './plugins.component.html'
})
export class PluginsComponent implements OnInit {

  private categories: List<Category> = List([]);
  private plugins: List<Plugin> = List();

  public linkActive: number = 1;

  constructor(
    private backend: BackendService,
    private session: SessionStorageService
  ) {  }

  public ngOnInit() {
    const categories: Category[] = this.session.get('categories');

    if (!categories) {
      this.backend.get('/categories')
        .subscribe((response: BackendResponse<Category[]>) => {
          this.session.set('categories', {
            expiry: DateTime.utc().plus({ minutes: 2 }).toISO(),
            data: response.payload
          });
          this.categories = List(response.payload);
        });
    } else {
      console.log(categories);
      this.categories = List(categories);
    }

    const plugins: Plugin[] = this.session.get('plugins');

    if (!plugins) {
      this.backend.get('/plugins')
        .subscribe((response: BackendResponse<Plugin[]>) => {
          this.session.set('plugins', {
            expiry: DateTime.utc().plus({ minutes: 1 }).toISO(),
            data: response.payload
          });
          this.plugins = List(response.payload);
        });
    } else {
      this.plugins = List(plugins);
    }
  }

  public getCategories(): List<Category> {
    return this.categories;
  }

  public getPlugins(): List<Plugin> {
    return this.plugins
      .filter((plugin: Plugin) => {
        if (plugin.category_id === this.linkActive) {
          return true;
        } else if (this.linkActive === this.plugins.size) {
          // Mischellaneous will always be plugins.size
          return true
        } else {
          return false;
        }
      });
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
  }
}
