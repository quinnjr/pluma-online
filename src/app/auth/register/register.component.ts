import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
<<<<<<< Updated upstream
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { UserCreateInput } from 'server/@generated/prisma-graphql/user';
=======
import { FormControl, FormGroup } from '@angular/forms';
>>>>>>> develop
=======
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { matching } from '../../validators/matching';
>>>>>>> Stashed changes

@Component({
  selector: 'pluma-online-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
<<<<<<< HEAD
  public registerForm: FormGroup;
<<<<<<< Updated upstream
=======
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

>>>>>>> develop
  public isSubmitted: boolean = false;
  public uniqueEmailFlag: boolean = true;
  public uniqueDisplayNameFlag: boolean = true;
=======
  public hasError = new BehaviorSubject(false);
  public error?: Error;
>>>>>>> Stashed changes

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
<<<<<<< Updated upstream
    this.registerForm = this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      institution: [''],
      website: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
        ]
      ],
      passwordConfirm: ['', [Validators.required]],
      formStatus: [null]
    }, {validators: [this.samePassValidator, this.sameEmailValidator, this.notEmailHandleValidator]});
  }

<<<<<<< HEAD
  /**
   * Validates that both passwords match, case sensitive
   */
  samePassValidator: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let passConfirm = group.get('passwordConfirm')?.value;
    return pass === passConfirm ? null : { PassMismatch: true }
  }

  /**
   * Validates that both emails match, case insensitive
   */
  sameEmailValidator: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let email = group.get('email')?.value.toLowerCase();
    let confirmEmail = group.get('emailConfirm')?.value.toLowerCase();
    return email === confirmEmail ? null : { EmailMismatch: true }
=======
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
>>>>>>> Stashed changes
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
    return email != displayName ? null : { InvalidDisplayName: true };
  };

  public onSubmit() {
    if (this.registerForm.pristine || this.registerForm.invalid) {
      return;
    }

    const password = this.registerForm.get('password')?.value;

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
=======
  public onSubmit() {}
>>>>>>> develop
}
