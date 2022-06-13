// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Apollo, gql } from 'apollo-angular';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Subscription, switchMap, tap } from 'rxjs';

import { UserService } from '../../user/user.service';

@Component({
  selector: 'pluma-online-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isSubmitted: boolean = false;

  private recaptcha?: Subscription;

  constructor(
    private readonly $router: Router,
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient,
    private readonly $apollo: Apollo,
    private readonly $storage: StorageMap,
    private readonly $userServer: UserService,
    private readonly $recaptchaService: ReCaptchaV3Service
  ) {
    this.loginForm = this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&*@^])/)
        ]
      ]
      // recaptcha: [null, Validators.required]
    });
  }

  public ngOnInit(): void {
    // eslint-disable-next-line rxjs-angular/prefer-async-pipe
    this.recaptcha = this.$recaptchaService.onExecute.subscribe(
      (data: OnExecuteData) => {
        this.handleRecaptchaExecute(data.action, data.token);
      }
    );
  }

  public ngOnDestroy() {
    if (this.recaptcha) {
      this.recaptcha.unsubscribe();
    }
  }

  public onSubmit() {
    if (this.loginForm.pristine || this.loginForm.invalid) {
      return;
    }

    this.$http
      .post<{ accessToken: string }>('/api/auth/login', this.loginForm.value)
      .pipe(
        tap((data) => {
          this.$storage
            .set('accessToken', data.accessToken)
            .subscribe(() => {});
        }),
        switchMap(() => {
          return this.$apollo.query({
            query: gql(`
              {
                user {
                  id
                  email
                  displayName
                  avatar
                  role
                }
              }
            `)
          });
        }),
        tap(({ data }) => {
          this.$storage.set('user', (data as any).user).subscribe(() => {});
          return this.$userServer.update((data as any).user);
        })
      )
      .subscribe({
        next: ({ loading }) => {
          if (!loading) {
            this.$router.navigateByUrl('/');
          }
        },
        error: (error: any) => {
          // do error handling
        }
      });
  }

  private handleRecaptchaExecute(action: string, token: string) {}
}
