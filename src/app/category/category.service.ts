import { Injectable } from '@angular/core';
import { Apollo, Mutation, Query, gql, QueryRef } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/build/types';
import { Category} from '../../../server/@generated/prisma-graphql/category';
import {CategoryCreateInput} from "prisma";

export interface Response {
  categories: Category[];
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends Query<Response> {
  public document = gql`
    query FetchCategories(
      $skip: Int
      $take: Int
    ) {
      categories(skip: $skip, take: $take) {
        name,
        id
      }
    }
  `;

  public postDocument = gql`
    mutation PostCategory($data: CategoryCreateInput)
    {
      createCategory(data: $data) {
        name,
        id
      }
    }
  `;

  constructor(
    private readonly $apollo: Apollo,
    // ,private readonly $categoryResolver: CategoryResolver
    ) {
    super($apollo);
  }

  public post(data: CategoryCreateInput){
    console.log(data);
    return this.$apollo.mutate({
      mutation: this.postDocument,
      variables:{
        data: data
      }
    });
  };

  public watch(variables: any): QueryRef<any, EmptyObject> {
    return this.$apollo.watchQuery<any>({
      query: this.document,
      variables
    });
  }
}
