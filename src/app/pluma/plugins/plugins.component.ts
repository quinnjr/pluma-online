// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { List } from 'immutable';
import { QueryRef, gql, Apollo } from 'apollo-angular';
import { SortOrder } from '../../enum/sort-order';
import { Plugin, Category } from 'prisma';
import { isPlatformBrowser } from '@angular/common';

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
  public skip = new BehaviorSubject(0);
  public take = new BehaviorSubject(100);

  public plugins?: Observable<List<Plugin>>;
  public categories?: Observable<List<Category>>;
  public categoryFilter = new BehaviorSubject<string | undefined>(undefined);

  private pluginsQuery?: QueryRef<any, any>;
  private categoryQuery?: QueryRef<any, any>;

  constructor(
    private readonly $apollo: Apollo,
    @Inject(PLATFORM_ID) private readonly $platformId: Object
  ) {}

  public ngOnInit() {
    if (isPlatformBrowser(this.$platformId)) {
      // Getting Plugins
      this.pluginsQuery = this.$apollo.watchQuery({
        query: FETCH_PLUGINS,
        variables: {
          where: {
            category: {
              has: this.categoryFilter.value
            }
          },
          orderBy: {
            name: SortOrder.asc
          },
          skip: this.skip.value,
          take: this.take.value
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
  }

  public changeCategoryFilter(value: string | undefined) {
    this.categoryFilter.next(value);

    this.pluginsQuery?.setVariables({
      where: {
        categoryId: {
          in: this.categoryFilter.value
        }
      },
      orderBy: {
        name: SortOrder.asc
      },
      skip: this.skip.value,
      take: this.take.value
    });

    this.pluginsQuery?.refetch();
  }
}
