import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, switchMap } from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';
import { matching } from '../../validators/matching';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';

const CHANGE_PASSWORD = gql`
  mutation changePassword(
    $where: PasswordResetCodeWhereUniqueInput!
    $password: String!
  ) {
    changePassword(where: $where, password: $password) {
      displayName
      email
      enabled
      role
    }
  }
`;

@Component({
  selector: 'pluma-online-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  isSubmitted = false;
  hasError = new BehaviorSubject(false);
  error?: Error;
  token: string | null = 'undefined';

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $router: ActivatedRoute,
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
    this.token = this.$router.snapshot.queryParamMap.get('token');
    console.log(this.$router.snapshot);
  }

  public onSubmit() {
    if (this.resetForm.pristine || this.resetForm.invalid) {
      return;
    }
    this.isSubmitted = true;
    console.log(this.token);
    const newPassword = this.resetForm.get('password')?.value;

    this.$apollo
      .mutate({
        mutation: CHANGE_PASSWORD,
        variables: {
          where: {
            token: this.token
          },
          password: newPassword
        }
      })
      .subscribe(
        (result: any) => {
          console.log(result.data.changePassword);
        },
        (error) => {
          alert(error);
        }
      );
    // this.$http
    //   .post<{ accessToken: string }>('/api/auth/login', request)
    //   .pipe(
    //     tap((data) => {
    //       console.log(data);
    //       this.$storage
    //         .set('accessToken', data.accessToken)
    //         .subscribe(() => {});
    //     })
    //   )
    //   .subscribe({
    //     next: ({ accessToken }) => {
    //       if (!accessToken) {
    //         //If here than user did not authenticate
    //         // this.$router.navigateByUrl('/');
    //       } else {
    //         console.log(accessToken);
    //       }
    //     },
    //     error: (error: any) => {
    //       // do error handling
    //     }
    //   });

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
