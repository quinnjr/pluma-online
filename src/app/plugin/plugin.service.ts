import { Injectable } from '@angular/core';
import { Apollo, Mutation, Query, gql, QueryRef } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/build/types';
import {PluginCreateInput} from "prisma";
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
        categoryId
        category {id, name}
        language {id, name}
        rating
      }
    }
  `;

  public postDocument = gql`
  mutation PostPlugin($data: PluginCreateInput)
  {
    createPlugin(data: $data) {
      name,
      id
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

  public post(data: PluginCreateInput){
    console.log(data);
    return this.$apollo.mutate({
      mutation: this.postDocument,
      variables:{
        data: data
      }
    });
  };
}
