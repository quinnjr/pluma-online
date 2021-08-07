// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List, Map } from 'immutable';
import { Observable, Subscriber, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Plugin } from '../../../../../server/@generated/prisma-graphql/plugin/plugin.model';
import { Category } from '../../../../../server/@generated/prisma-graphql/prisma/category.enum';

const Colors = Map([
  [Category.FileConverters, '#FF6347'],
  [Category.StatsVisualizations, '#FF7F50'],
  [Category.Transformations, '#FFFF00'],
  [Category.Dissimilarity, '#00FF7F'],
  [Category.Correlation, '#66CDAA'],
  [Category.Centrality, '#6495ED'],
  [Category.Clustering, '#DDA0DD'],
  [Category.TimeSeries, '#F5DEB3'],
  [Category.ExternalTools, '#DAA520'],
  [Category.Miscellaneous, '#C0C0C0']
]);

@Component({
  selector: 'pluma-online-pluma-plugins',
  /*templateUrl: './plugins.component.html'*/
  template: ``
})
export class PluginsComponent implements OnInit {
  private plugins: List<Plugin> = List();

  public linkActive: number = 1;

  constructor(private readonly $storage: StorageMap) {}

  public ngOnInit() {
    //@TODO: Fix me
  }

  public getPlugins(): List<Plugin> {
    //@TODO: fix me
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
  }
}
