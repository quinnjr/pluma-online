// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { List, Map } from 'immutable';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

import { StorageMap } from '@ngx-pwa/local-storage';

import { Plugin } from '../../../../../server/@generated/prisma-graphql/plugin/plugin.model';

enum Category {
  FileConverters = 'File Converters',
  StatsVisualizations = 'Stats & Visualizations',
  Transformations = 'Transformations',
  Dissimilarity = 'Dissimilarity',
  Correlation = 'Correlation',
  Centrality = 'Centrality',
  Clustering = 'Clustering',
  TimeSeries = 'Time Series',
  ExternalTools = 'External Tools',
  Miscellaneous = 'Miscellaneous'
}

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
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
  public loading = true;
  public plugins?: List<Plugin>;
  public linkActive: number = 0;

  public categories: Category[] = Object.values(Category);

  private querySubscription?: Subscription;

  constructor(
    private readonly $apollo: Apollo,
    private readonly $storage: StorageMap
  ) {}

  public ngOnInit() {
    this.querySubscription = this.$apollo
      .query<{ plugins: Plugin[] }>({
        query: gql`
          plugins() {
            name
            description
            category
            githubUrl
            language
          }
        `
      })
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.plugins = List(data.plugins);
      });
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
  }
}
