import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { matching } from '../../validators/matching';

@Component({
  selector: 'pluma-online-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent {
  public resetForm: FormGroup;
  public isSubmitted = false;
  public hasError = new BehaviorSubject(false);
  public error?: Error;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
    this.resetForm = this.$fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&*@^])/)
          ]
        ],
        passwordConfirm: ['', [Validators.required, matching('password')]]
      }
    );
  }

  public onSubmit() {
    if (this.resetForm.pristine || this.resetForm.invalid) {
      return;
    }

    const password = this.resetForm.get('password')?.value;

    this.isSubmitted = true;

    this.$http
      .post(
        '/api/auth/register',
        {
          userInput: this.resetForm.value,
          password: password?.value
        },
        { observe: 'response' }
      )
      .subscribe(
        (response: HttpResponse<Object>) => {
          if (response.ok && response.body?.['error'] === undefined) {
            //User Created
          }
        },
        (error) => {
          this.hasError.next(true);
          this.error = error;
        }
      );
  }
}
