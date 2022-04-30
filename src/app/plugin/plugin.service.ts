import { Injectable } from '@angular/core';
import { Apollo, Mutation, Query, gql, QueryRef } from 'apollo-angular';

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
        language
        category
      }
    }
  `;

  constructor(private readonly $apollo: Apollo) {
    super($apollo);
  }

  public watch(variables: any): QueryRef<any, any> {
    return this.$apollo.watchQuery<any>({
      query: this.document,
      variables
    });
  }
}
