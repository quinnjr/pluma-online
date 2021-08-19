// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
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

@Component({
  selector: 'pluma-online-pluma-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, OnDestroy {
  public categories: Category[] = Object.values(Category);
  public loading = true;
  public linkActive: number = 0;
  public skip = 0;
  public take = 50;

  private _plugins?: List<Plugin>;
  private categoryKeys: string[] = Object.keys(Category);
  private pluginQuery?: QueryRef<{plugins: Plugin[]}>;
  private pluginQuerySubscription?: Subscription;

  constructor(
    private readonly $apollo: Apollo
  ) {}

  public ngOnInit() {
    this.pluginQuery = this.$apollo
      .watchQuery<{ plugins: Plugin[] }>({
        /* eslint prettier/prettier: off */
        query: gql`
          query GetPlugins(
            $where: PluginWhereInput,
            $skip: Int,
            $take: Int,
            $orderBy: PluginOrderByInput
          ) {
            plugins(
              where: $where,
              skip: $skip,
              take: $take,
              orderBy: $orderBy
            ) {
              name
              description
              githubUrl
              language
              category
            }
          }
        `,
        variables: {
          orderBy: {
            name: SortOrder.desc
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

    this.pluginQuerySubscription = this.pluginQuery?.valueChanges
      .pipe(
        tap((req: any) => {
          console.log(req);
        })
      )
      .subscribe(({ data, loading, error }: {data: {plugins: Plugin[]}, loading: any, error: any}) => {
        if (error) console.log(error);

        this.loading = loading;
        this._plugins = List(data.plugins).sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      });
  }

  public ngOnDestroy() {
    this.pluginQuerySubscription?.unsubscribe();
  }

  public get plugins() {
    return this._plugins?.filter(
      (p) => p.category === this.categoryKeys[this.linkActive]
    );
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public setLinkActive(n: number) {
    this.linkActive = n;
    this.pluginQuery?.refetch();
  }
}
