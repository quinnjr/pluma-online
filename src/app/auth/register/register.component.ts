import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { matching } from '../../validators/matching';

@Component({
  selector: 'pluma-online-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public isSubmitted = false;
  public hasError = new BehaviorSubject(false);
  public error?: Error;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
    this.registerForm = this.$fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, matching('email')]],
        displayName: ['', [Validators.required]],
        institution: [''],
        website: [''],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&*@^])/)
          ]
        ],
        passwordConfirm: ['', [Validators.required, matching('password')]]
      },
      {
        validators: [this.notEmailHandleValidator]
      }
    );
  }

  /**
   * Validates that display name is not email address,
   * case insensitive
   */
  notEmailHandleValidator: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let email = group.get('email')?.value.toLowerCase();
    let displayName = group.get('displayName')?.value.toLowerCase();
    return email != displayName ? null : { invalidDisplayName: true };
  };

  public onSubmit() {
    if (this.registerForm.pristine || this.registerForm.invalid) {
      return;
    }

    const password = this.registerForm.get('password')?.value;

    this.isSubmitted = true;

    this.$http
      .post(
        '/api/auth/register',
        {
          userInput: this.registerForm.value,
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
