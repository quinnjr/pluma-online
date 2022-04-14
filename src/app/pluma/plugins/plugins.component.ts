// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { List, Map } from 'immutable';
import { QueryRef } from 'apollo-angular';
import { Plugin } from '../../../../server/@generated/prisma-graphql/plugin';
import {Category, CategoryCreateNestedOneWithoutPluginsInput, CategoryWhereUniqueInput} from '../../../../server/@generated/prisma-graphql/category';
// import {Language} from '../../../../server/@generated/prisma-graphql/language';
import { SortOrder } from '../../enum/sort-order';
import { PluginService } from '../../plugin/plugin.service';
import { CategoryService } from '../../category/category.service';
// import { LanguageService } from '../../language/language.service';
import {CategoryCreateInput} from "prisma";
import {PluginCreateInput} from "prisma";
import { LanguageCreateNestedOneWithoutPluginsInput, LanguageWhereUniqueInput } from 'server/@generated/prisma-graphql/language';

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

  // declare public languages: Observable<List<Language>>;
  // private languageFetcQuery?: QueryRef<{ languages: Language[] }>;

  constructor(
    private readonly $pluginService: PluginService,
    private readonly $categoryService: CategoryService
    // private readonly $languageService: LanguageService,
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

    // Getting Languages
    // this.languageFetcQuery = this.$languageService.watch({});

    // this.languages = this.languageFetcQuery.valueChanges.pipe(
    //   map((resultlang) => List(resultlang.data.languages))
    // );
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

  public AddPluginModal() {
    //console.log("Plugin button was clicked");
    var pluginModal = document.getElementById("pluginModal");
    pluginModal?.classList.add("is-active");
  }

  public ClosePluginModal() {
    //console.log("Close Plugin button was clicked");
    // Clear Tag(s)
    (<HTMLInputElement>document.getElementById('pluginModalName')).value = "";
    (<HTMLInputElement>document.getElementById('pluginModalDescription')).value = "";

    // Hide Modal
    var pluginModal = document.getElementById("pluginModal");
    pluginModal?.classList.remove("is-active");
  }

  public postPlugin(){

    // Build Plugin to send to Mutation
    let PluginName = (<HTMLInputElement>document.getElementById('pluginModalName')).value;
    let PluginDescription = (<HTMLInputElement>document.getElementById('pluginModalDescription')).value;
    let CategorySelect = (<HTMLInputElement>document.getElementById('CategoryId'));
    let CategoryId = (<HTMLSelectElement><unknown>CategorySelect).options[(<HTMLSelectElement><unknown>CategorySelect).selectedIndex].value;

    let PluginPostObject =
      {
          name:PluginName
          ,language:
          {
            connect:{id: "62327dd1a1b48b0f8cd75c4f"} as LanguageWhereUniqueInput
          } as LanguageCreateNestedOneWithoutPluginsInput
          ,category:
          {
            connect:{id: CategoryId} as CategoryWhereUniqueInput
          } as CategoryCreateNestedOneWithoutPluginsInput
          ,description:PluginDescription
          ,rating:0
          ,githubUrl:"https://www.linkedin.com/in/ronald-hernandez-9a23b9159?trk=people-guest_people_search-card"
      } as PluginCreateInput;

    this.$pluginService.post(PluginPostObject).subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    // Close and clear Modal
    this.ClosePluginModal();
  }

  // Category Helper methods
  public AddCategoryModal() {
    //console.log("Category button was clicked");
    var categoryModal = document.getElementById("categoryModal");
    categoryModal?.classList.add("is-active");
  }

  public CloseCategoryModal() {
    //console.log("Close Category button was clicked");

    // Clear Tag(s)
    (<HTMLInputElement>document.getElementById('categoryModalName')).value = "";

    // Hide Modal
    var categoryModal = document.getElementById("categoryModal");
    categoryModal?.classList.remove("is-active");
  }

  public postCategory(){

    // Build Plugin to send to Mutation
    let CategoryName = (<HTMLInputElement>document.getElementById('categoryModalName')).value;
    let categoryPostObject = {name:CategoryName} as CategoryCreateInput;
    this.$categoryService.post(categoryPostObject).subscribe(({ data }) => {
        console.log('got data', data);
      }, (error) => {
        console.log('there was an error sending the query', error);
      });

    // Close and clear Modal
    this.CloseCategoryModal();
  }
}
