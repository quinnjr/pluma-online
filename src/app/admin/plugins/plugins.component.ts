import { Component, OnInit, OnDestroy } from '@angular/core';
import { List } from 'immutable';
import { Subscription, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Apollo, gql, QueryRef } from 'apollo-angular';

import { Plugin } from '../../../../server/@generated/prisma-graphql/plugin';
import { SortOrder } from '../../enum/sort-order';
import { Category } from '../../enum/category';
import { PluginService } from '../../plugin/plugin.service';

const create_plugin = gql`
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

const update_plugin = gql`
  mutation UpdatePlugin($where: PluginWhereUniqueInput!, $data: PluginUpdateInput!) {
    updatePlugin(where: $where, data: $data) {
      name
      description
      githubUrl
      language
      category
    }
  }
`;

@Component({
  selector: 'pluma-online-admin-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, OnDestroy {
  public tabIndex = 0;
  public categories: Category[] = Object.values(Category);
  public plugins?: Observable<List<any>>;
  private pluginQuery?: QueryRef<{ plugins: Plugin[] }>;

  constructor(
    private readonly $pluginService: PluginService
  ) { }

  public ngOnInit(): void {
    this.pluginQuery = this.$pluginService.watch({
      orderBy: {
        name: SortOrder.asc
      }
    });

    this.plugins = this.pluginQuery?.valueChanges
      .pipe(
        map((result) => List(result.data.plugins))
      );
  }

  public ngOnDestroy() {
  }

  public createPlugin(): void {

  }

  public updatePlugin(): void {

  }
}
