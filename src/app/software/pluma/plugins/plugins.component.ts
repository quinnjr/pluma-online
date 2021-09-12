// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, Map } from 'immutable';
import { Apollo, gql, QueryRef } from 'apollo-angular';

import { Plugin } from '../../../../../server/@generated/prisma-graphql/plugin';

import { SortOrder } from '../../../sort-order.enum';

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

const query = gql`
  query GetPlugins(
    $where: PluginWhereInput,
    $skip: Int,
    $take: Int,
    $orderBy: PluginOrderByInput
  ) {
    plugins(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
      name
      description
      githubUrl
      language
      category
    }
  }
`;

@Component({
  selector: 'pluma-online-pluma-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, OnDestroy {
  public categories: Category[] = Object.values(Category);
  public loading = false;
  public linkActive: number = 0;
  public skip = 0;
  public take = 100;

  public plugins?: List<any>;
  private categoryKeys: string[] = Object.keys(Category);
  private pluginQuery?: QueryRef<{ plugins: Plugin[] }>;
  private pluginQuerySubscription?: Subscription;

  constructor(private readonly $apollo: Apollo) {}

  public ngOnInit() {
    this.pluginQuery = this.$apollo.watchQuery<{ plugins: Plugin[] }>({
      query,
      variables: {
        orderBy: {
          name: SortOrder.asc
        },
        where: {
          category: {
            equals: this.categoryKeys[this.linkActive]
          }
        },
        skip: this.skip,
        take: this.take
      }
    });

    this.pluginQuerySubscription = this.pluginQuery?.valueChanges.subscribe(
      ({ data, loading, error }) => {
        if (error) console.log(error);
        this.loading = loading;
        this.plugins = List(data.plugins);
      }
    );
  }

  public ngOnDestroy() {
    this.pluginQuerySubscription?.unsubscribe();
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public async refresh() {
    console.log('in refresh');
    this.pluginQuery?.refetch({
      variables: {
        orderBy: {
          name: SortOrder.asc
        },
        where: {
          category: {
            equals: this.categoryKeys[this.linkActive]
          }
        },
        skip: this.skip,
        take: this.take
      }
    });
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
  }
}
