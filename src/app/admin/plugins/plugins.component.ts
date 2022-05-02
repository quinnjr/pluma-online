import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { List } from 'immutable';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { Category, Language, Plugin } from 'prisma';

import { SortOrder } from '../../enum/sort-order';
import { isPlatformBrowser } from '@angular/common';

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

const CREATE_CATEGORY = gql`
  mutation CreateCategory($data: CategoryCreateInput!) {
    createCategory(data: $data) {
      id
      name
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

  public take = new BehaviorSubject(100);
  public skip = new BehaviorSubject(0);

  public plugins?: Observable<List<Plugin>>;
  public categories?: Observable<List<Category>>;
  public languages?: Observable<List<Language>>;
  public categoryFilter = new BehaviorSubject<string | undefined>(undefined);

  public createPluginForm = this.$fb.group({
    name: ['', Validators.required],
    githubUrl: ['', Validators.required],
    description: ['', Validators.required],
    language: ['', Validators.required],
    category: ['', Validators.required]
  });

  public createCategoryForm = this.$fb.group({
    name: ['', Validators.required]
  });

  private pluginQuery?: QueryRef<{ plugins: Plugin[] }, any>;
  private categoryQuery?: QueryRef<{ categories: Category[] }, any>;
  private LanguageQuery?: QueryRef<{ languages: Language[] }, any>;

  constructor(
    private readonly $apollo: Apollo,
    private readonly $fb: FormBuilder,
    @Inject(PLATFORM_ID) private $platformId: Object
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.$platformId)) {
      this.pluginQuery = this.$apollo.watchQuery<{ plugins: Plugin[] }, any>({
        query: FETCH_PLUGINS,
        variables: {
          where: {
            categoryId: {
              in: this.categoryFilter.value
            }
          },
          take: this.take.value,
          skip: this.skip.value,
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

      this.plugins = this.pluginQuery?.valueChanges.pipe(
        map((result) => List(result.data.plugins))
      );

      this.categories = this.categoryQuery.valueChanges.pipe(
        map((result) => List(result.data.categories))
      );

      this.languages = this.LanguageQuery.valueChanges.pipe(
        map((result) => List(result.data.languages))
      );
    }
  }

  public togglePluginModal() {
    this.pluginModal.nativeElement.classList.toggle('is-active');
  }

  public createPlugin() {
    this.$apollo
      .mutate({
        mutation: CREATE_PLUGIN,
        variables: {
          name: this.createPluginForm.get('name')?.value,
          githubUrl: this.createPluginForm.get('githubUrl')?.value,
          description: this.createPluginForm.get('description')?.value,
          language: {
            connect: this.createPluginForm.get('language')?.value
          },
          category: {
            connect: this.createPluginForm.get('category')?.value
          }
        }
      })
      .subscribe(() => {
        if (process.env.NODE_ENV === 'development') {
          console.log('CreatePlugin mutation successfully sent!');
        }
      }, console.error);

    this.pluginQuery?.refetch();
  }

  public updatePlugin() {
    this.$apollo.mutate({
      mutation: UPDATE_PLUGIN
    });

    this.pluginQuery?.refetch();
  }

  public toggleCategoryModal() {
    this.categoryModal?.nativeElement.classList.toggle('is-active');
  }

  public createCategory() {
    this.$apollo.mutate({
      mutation: CREATE_CATEGORY,
      variables: {
        name: this.createCategoryForm.get('name')?.value
      }
    });

    this.categoryQuery?.refetch();
  }

  public changeCategoryFilter(value: string | undefined) {
    this.categoryFilter.next(value);
    this.pluginQuery?.setVariables({
      take: this.take.value,
      skip: this.skip.value,
      orderBy: {
        name: SortOrder.asc
      },
      where: {
        categoryId: {
          in: this.categoryFilter.value
        }
      }
    });
    this.pluginQuery?.refetch();
  }
}
