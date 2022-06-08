import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { UserCreateInput } from 'server/@generated/prisma-graphql/user';

@Component({
  selector: 'pluma-online-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public isSubmitted: boolean = false;
  public uniqueEmailFlag: boolean = true;
  public uniqueDisplayNameFlag: boolean = true;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
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
  }

  /**
   * Validates that display name is not email handle, case insensitive
   */
   notEmailHandleValidator: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let email = group.get('email')?.value.toLowerCase();
    let displayName = group.get('displayName')?.value.toLowerCase();
    return email != displayName ? null : { InvalidDisplayName: true }
  }

  public onSubmit() {

    if (this.registerForm.pristine || this.registerForm.invalid) {
      return;
    }

    const { email, displayName, institution, website, password } = this.registerForm.controls;

    let userInput: UserCreateInput;
    userInput = {
      'email' : email?.value,
      'displayName' : displayName?.value,
      'passwordHash':''
    }
    if (true /*website != ''*/){userInput.website = website?.value;}
    if (true /*institution != ''*/){userInput.institution = institution?.value;}

    this.$http.post('/api/auth/register',
    {
      userInput: userInput,
      password: password?.value
    }, { observe: 'response' }).subscribe((response: HttpResponse<Object>) => {

      if(response.ok && (response.body?.['error'] === undefined)){
        //User Created
      }
    },
    err => {
      console.log(err)
      if (err.status === 403){
        this.registerForm.get('formStatus')?.setValue(err.error.message)
      }
    })
  }
}
