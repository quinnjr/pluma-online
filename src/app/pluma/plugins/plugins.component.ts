// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List } from 'immutable';
import { QueryRef, gql, Apollo } from 'apollo-angular';
import { SortOrder } from '../../enum/sort-order';
import { Plugin, Category } from 'prisma';

const FETCH_PLUGINS = gql`
  query FetchPlugins(
    $where: PluginWhereInput
    $skip: Int
    $take: Int
    $orderBy: PluginOrderByWithRelationInput
  ) {
    plugins(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
      name
      description
      githubUrl
      categoryId
      category {
        id
        name
      }
      language {
        id
        name
      }
      rating
    }
  }
`;

const FETCH_CATEGORIES = gql`
  query FetchCategories(
    $where: CategoryWhereInput
    $skip: Int
    $take: Int
    $orderBy: CategoryOrderByWithRelationInput
  ) {
    categories(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
      id
      name
    }
  }
`;

@Component({
  selector: 'pluma-online-pluma-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
  public linkActive: number = 0;
  public skip = 0;
  public take = 100;

  public plugins?: Observable<List<Plugin>>;
  public categories?: Observable<List<Category>>;

  private pluginsQuery?: QueryRef<any, any>;
  private categoryQuery?: QueryRef<any, any>;

  constructor(private readonly $apollo: Apollo) {}

  public ngOnInit() {
    // Getting Plugins
    this.pluginsQuery = this.$apollo.watchQuery({
      query: FETCH_PLUGINS,
      variables: {
        orderBy: {
          name: SortOrder.asc
        },
        skip: this.skip,
        take: this.take
      }
    });

    this.categoryQuery = this.$apollo.watchQuery({
      query: FETCH_CATEGORIES,
      variables: {
        orderBy: {
          name: SortOrder.asc
        }
      }
    });

    this.plugins = this.pluginsQuery.valueChanges.pipe(
      map((result: any) => List(result.data.plugins))
    );

    this.categories = this.categoryQuery.valueChanges.pipe(
      map((result) => List(result.data.categories))
    );
  }

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }
}
