import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Language, Category, Plugin } from '@prisma/client';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SortOrder } from '../enum/sort-order';
import { UserService } from './user.service';

const CREATE_PLUGIN = gql`
  mutation CreatePlugin($data: PluginCreateInput!) {
    createPlugin(data: $data) {
      name
      description
      githubUrl
      language {
        name
      }
      category {
        name
      }
    }
  }
`;

const FETCH_LANGUAGES = gql`
  query FetchLanguages(
    $where: LanguageWhereInput
    $skip: Int
    $take: Int
    $orderBy: LanguageOrderByWithRelationInput
  ) {
    languages(where: $where, skip: $skip, take: $take, orderBy: $orderBy) {
      id
      name
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
  selector: 'pluma-online-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {
  @ViewChild('pluginModal')
  public pluginModal!: ElementRef;

  userId: String = '0';
  activateModal = false;
  public languages?: Observable<List<Language>>;
  public categories?: Observable<List<Category>>;
  private categoryQuery?: QueryRef<{ categories: Category[] }, any>;
  private LanguageQuery?: QueryRef<{ languages: Language[] }, any>;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $apollo: Apollo,
    private readonly $userService: UserService
  ) {}

  public createPluginForm = this.$fb.group({
    name: ['', Validators.required],
    githubUrl: ['', Validators.required],
    description: ['', Validators.required],
    language: ['', Validators.required],
    category: ['', Validators.required]
  });

  ngOnInit(): void {
    this.$userService.user.subscribe((result) => {
      console.log(result);
      this.userId = result?.id;
      console.log(this.userId);
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

    this.LanguageQuery = this.$apollo.watchQuery<
      { languages: Language[] },
      any
    >({
      query: FETCH_LANGUAGES,
      variables: {
        take: 50,
        skip: 0,
        orderBy: {
          name: SortOrder.asc
        }
      }
    });
    this.categories = this.categoryQuery.valueChanges.pipe(
      map((result) => List(result.data.categories))
    );

    this.languages = this.LanguageQuery.valueChanges.pipe(
      map((result) => List(result.data.languages))
    );
  }

  togglePluginModal(): void {
    this.pluginModal.nativeElement.classList.toggle('is-active');
  }

  public async createPlugin() {
    console.log(this.createPluginForm);
    this.$apollo
      .mutate({
        mutation: CREATE_PLUGIN,
        variables: {
          data: {
            name: this.createPluginForm.get('name')?.value,
            githubUrl: this.createPluginForm.get('githubUrl')?.value,
            description: this.createPluginForm.get('description')?.value,
            language: {
              connect: {
                id: this.createPluginForm.get('language')?.value
              }
            },
            category: {
              connect: {
                id: this.createPluginForm.get('category')?.value
              }
            },
            author: {
              connect: {
                id: this.userId
              }
            }
          }
        }
      })
      .subscribe(() => {
        this.createPluginForm.reset();
        if (process.env.NODE_ENV === 'development') {
          console.log('CreatePlugin mutation successfully sent!');
        }
      }, console.error);
  }
}
