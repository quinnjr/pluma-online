// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { List, Map } from 'immutable';
import { QueryRef } from 'apollo-angular';
import { Plugin } from '../../../../server/@generated/prisma-graphql/plugin';
import { SortOrder } from '../../enum/sort-order';
import { PluginService } from '../../plugin/plugin.service';
import {Category} from '../../../../server/@generated/prisma-graphql/category';
import { CategoryService } from '../../category/category.service';
import {CategoryCreateInput} from "prisma";

@Component({
  selector: 'pluma-online-pluma-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, OnDestroy {
  public linkActive: number = 0;
  public skip = 0;
  public take = 100;

  public plugins?: Observable<List<Plugin>>;
  private pluginQuery?: QueryRef<{ plugins: Plugin[] }>;
  declare public categories: Observable<List<Category>>;
  private categoryFetcQuery?: QueryRef<{ categories: Category[] }>;

  constructor(
    private readonly $pluginService: PluginService,
    private readonly $categoryService: CategoryService
    ) {}

  public ngOnInit() {
    // Getting Plugins
    this.pluginQuery = this.$pluginService.watch({
      orderBy: {
        name: SortOrder.asc
      },
      skip: this.skip,
      take: this.take
    });

    this.plugins = this.pluginQuery.valueChanges.pipe(
      map((result) => List(result.data.plugins))
    );

    // Getting Categories
    this.categoryFetcQuery = this.$categoryService.watch({});

    this.categories = this.categoryFetcQuery.valueChanges.pipe(
      map((resultcat) => List(resultcat.data.categories))
    );
  }

  public ngOnDestroy() {}

  public isLinkActive(n: number): boolean {
    return n === this.linkActive;
  }

  public refresh() {
    this.categories.subscribe((categories)=>{
      this.pluginQuery?.refetch({
        orderBy: {
          name: SortOrder.asc
        },
        where: {
          categoryId: {
            equals: categories?.get(this.linkActive)?.id
          }
        },
        skip: this.skip,
        take: this.take
      })
    });
  }

  public postCategory(){
    let CategoryName = (<HTMLInputElement>document.getElementById('categoryModalName')).value;
    let categoryPostObject = {name:CategoryName} as CategoryCreateInput;
    this.$categoryService.post(categoryPostObject).subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });
    this.CloseCategoryModal();
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
    (<HTMLInputElement>document.getElementById('categoryModalName')).value = "";
    var categoryModal = document.getElementById("categoryModal");
    categoryModal?.classList.remove("is-active");
  }
}
