// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { List, Map } from 'immutable';
import { QueryRef } from 'apollo-angular';

import { Plugin } from '../../../../server/@generated/prisma-graphql/plugin';
import { SortOrder } from '../../enum/sort-order';
import { Category } from '../../enum/category';
import { PluginService } from '../../plugin/plugin.service';

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
  public linkActive: number = 0;
  public skip = 0;
  public take = 100;

  public plugins?: Observable<List<Plugin>>;
  private categoryKeys: string[] = Object.keys(Category);
  private pluginQuery?: QueryRef<{ plugins: Plugin[] }>;

  constructor(private readonly $pluginService: PluginService) {}

  public ngOnInit() {
    this.pluginQuery = this.$pluginService.watch({
      orderBy: {
        name: SortOrder.asc
      },
      // where: {
      //   category: {
      //     equals: this.categoryKeys[this.linkActive]
      //   }
      // },
      skip: this.skip,
      take: this.take
    });

    this.plugins = this.pluginQuery.valueChanges.pipe(
      map((result) => List(result.data.plugins))
    );
  }

  public ngOnDestroy() {}

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public refresh() {
    this.pluginQuery?.refetch({
      orderBy: {
        name: SortOrder.asc
      },
      // where: {
      //   category: {
      //     equals: this.categoryKeys[this.linkActive]
      //   }
      // },
      skip: this.skip,
      take: this.take
    });
  }

  public AddPluginModal() {
    //console.log("Plugin button was clicked");
    var pluginModal = document.getElementById("pluginModal");
    pluginModal?.classList.add("is-active");
  }

  public AddCategoryModal() {
    //console.log("Category button was clicked");
    var categoryModal = document.getElementById("categoryModal");
    categoryModal?.classList.add("is-active");
  }

  public ClosePluginModal() {
    //console.log("Close Plugin button was clicked");
    var pluginModal = document.getElementById("pluginModal");
    pluginModal?.classList.remove("is-active");
  }

  public CloseCategoryModal() {
    //console.log("Close Category button was clicked");
    var categoryModal = document.getElementById("categoryModal");
    categoryModal?.classList.remove("is-active");
  }
}
