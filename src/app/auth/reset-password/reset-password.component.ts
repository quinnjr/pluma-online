import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, switchMap } from 'rxjs';

import { StorageMap } from '@ngx-pwa/local-storage';

import { matching } from '../../validators/matching';

import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'pluma-online-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetForm: FormGroup;
  public isSubmitted = false;
  public hasError = new BehaviorSubject(false);
  public error?: Error;
  public email;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient,
    private readonly $router: ActivatedRoute,
    private readonly $storage: StorageMap,
    private readonly $apollo: Apollo
  ) {
    //.pipe(map((data) => data.email));

    this.resetForm = this.$fb.group({
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&*@^])/)
        ]
      ],
      passwordConfirm: ['', [Validators.required, matching('password')]]
    });
  }

  public ngOnInit(): void {
    this.email = this.$router.snapshot.queryParamMap.get('email');
    console.log(this.$router.snapshot);
  }

  public onSubmit() {
    if (this.resetForm.pristine || this.resetForm.invalid) {
      return;
    }

    const password = this.resetForm.get('password')?.value;

    this.isSubmitted = true;

    console.log(this.email);

    const token = this.$router.snapshot.queryParamMap.get('token')

    const request = {
      // email: this.email,
      // password: password
      token
    };

    this.$http
      .post<{ accessToken: string }>('/api/auth/login', request)
      .pipe(
        tap((data) => {
          console.log(data)
          this.$storage
            .set('accessToken', data.accessToken)
            .subscribe(() => {});
        })
        )
      .subscribe({
        next: ({ accessToken }) => {
          if (!accessToken) {
            //If here than user did not authenticate
            // this.$router.navigateByUrl('/');
          } else {
            console.log(accessToken);
          }
        },
        error: (error: any) => {
          // do error handling
        }
      });

    // this.email.subscribe((data) => {
    //   console.log(data);
    // });

    // this.$http
    //   .post(
    //     '/api/auth/register',
    //     {
    //       userInput: this.resetForm.value,
    //       password: password?.value
    //     },
    //     { observe: 'response' }
    //   )
    //   .subscribe(
    //     (response: HttpResponse<Object>) => {
    //       if (response.ok && response.body?.['error'] === undefined) {
    //         //User Created
    //       }
    //     },
    //     (error) => {
    //       this.hasError.next(true);
    //       this.error = error;
    //     }
    //   );
  }
}
