// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Observable, Subscriber, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

import { Category } from '../category';
import { Plugin } from '../plugin';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'pluma-online-pluma-plugins',
  /*templateUrl: './plugins.component.html'*/
  template: ``
})
export class PluginsComponent implements OnInit {

  private categories: List<Category> = List([]);
  private plugins: List<Plugin> = List();

  public linkActive: number = 1;

  constructor(private readonly $storage: StorageMap) {}

  public ngOnInit() {
    //@TODO: Fix me
  }

  public getCategories(): List<Category> {
    return this.categories;
  }

  public getPlugins(): List<Plugin> {
    return this.plugins.filter((plugin: Plugin) => {
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
