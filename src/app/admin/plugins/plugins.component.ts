import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import {
  Category,
  CategoryCreateInput,
  CategoryCreateNesetedOneWithoutPluginsInput,
  Language,
  LanguageCreateNestedOneWithoutPluginsInput,
  LanguageWhereUniqueInput,
  Plugin,
  PluginCreateInput
} from 'prisma';

import { SortOrder } from '../../enum/sort-order';

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

const CREATE_PLUGIN = gql`
  mutation CreatePlugin($pluginData: PluginCreateInput!) {
    createPlugin(pluginData: $pluginData) {
      name
      description
      githubUrl
      language
      category
    }
  }
`;

const UPDATE_PLUGIN = gql`
  mutation UpdatePlugin(
    $where: PluginWhereUniqueInput!
    $data: PluginUpdateInput!
  ) {
    updatePlugin(where: $where, data: $data) {
      name
      description
      githubUrl
      language
      category
    }
  }
`;

const FETCH_CATEGORIES = gql`
  query FetchCategories(
    $where: CategoryWhereInput
    $skip: Int,
    $take: Int,
    $orderBy: CategoryOrderByWithRelationInput
  ) {
    categories()
  }
`;

const CREATE_CATEGORY = gql`
  mutation CreateCategory($data: CategoryCreateInput) {
    createCategory(data: $data) {
      id
      name
    }
  }
`;

@Component({
  selector: 'pluma-online-admin-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
  @ViewChild('pluginModal')
  public pluginModal!: ElementRef;

  @ViewChild('categoryModal')
  public categoryModal!: ElementRef;

  public take = 100;
  public skip = 0;

  public tabIndex = 0;
  public plugins?: Observable<List<Plugin>>;
  public categories?: Observable<List<Category>>;

  private pluginQuery?: QueryRef<{ plugins: Plugin[] }, any>;
  private categoryQuery?: QueryRef<{ categories: Category[] }, any>;

  constructor(private readonly $apollo: Apollo) {}

  public ngOnInit(): void {
    this.pluginQuery = this.$apollo.watchQuery<{ plugins: Plugin[] }, any>({
      query: FETCH_PLUGINS,
      variables: {
        take: this.take,
        skip: this.skip,
        orderBy: {
          name: SortOrder.asc
        }
      }
    });

    this.categoryQuery = this.$apollo.watchQuery<
      { categories: Category[] },
      any
    >({
      query: FETCH_CATEGORIES,
      variables: {
        take: 50,
        skip: 0,
        orderBy: {
          name: SortOrder.asc
        }
      }
    });

    this.plugins = this.pluginQuery?.valueChanges.pipe(
      map((result) => List(result.data.plugins))
    );

    this.categories = this.categoryQuery.valueChanges.pipe(
      map((result) => List(result.data.categories))
    );
  }

  public openPluginModal() {
    this.pluginModal.nativeElement.classList.add('is-active');
  }

  public closePluginModal() {
    this.pluginModal.nativeElement.classList.remove('is-active');
  }

  public createPlugin() {
    this.$apollo.mutate({
      mutation: CREATE_PLUGIN
    });
  }

  public updatePlugin() {
    this.$apollo.mutate({
      mutation: UPDATE_PLUGIN
    });
  }

  // Category Helper methods
  public openCategoryModal() {
    this.categoryModal?.nativeElement.classList.add('is-active');
  }

  public closeCategoryModal() {
    this.categoryModal.nativeElement.classList.remove('is-active');
  }

  public createCategory() {
    this.$apollo.mutate({
      mutation: CREATE_CATEGORY
    });
  }
}
