import { Injectable } from '@angular/core';
import { Apollo, Mutation, Query, gql, QueryRef } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/build/types';

import { Plugin } from '../../../server/@generated/prisma-graphql/plugin';

export interface Response {
  plugins: Plugin[];
}

@Injectable({
  providedIn: 'root'
})
export class PluginService extends Query<Response> {
  public document = gql`
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
      }
    }
  `;

  constructor(private readonly $apollo: Apollo) {
    super($apollo);
  }

  public watch(variables: any): QueryRef<any, EmptyObject> {
    return this.$apollo.watchQuery<any>({
      query: this.document,
      variables
    });
  }
}
