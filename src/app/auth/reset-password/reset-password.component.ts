import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { matching } from '../../validators/matching';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

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
    private readonly $activatedRouter: ActivatedRoute,
    private readonly $apollo: Apollo,
    private readonly $router: Router
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
    this.token = this.$activatedRouter.snapshot.queryParamMap.get('token');
  }

  public onSubmit() {
    if (this.resetForm.pristine || this.resetForm.invalid) {
      return;
    }
    this.isSubmitted = true;
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
          this.$router.navigateByUrl('/');
        },
        (error) => {
          alert(error);
        }
      );
  }
}
