import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { notEmailValidator } from "./verify/validate/same-as-email.directive";
import { HttpResponse, HttpClient } from '@angular/common/http';
import { UniqueError } from "../../../../server/auth/uniqueError";
import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";

@Component({
  selector: 'pluma-online-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, DoCheck {
  public registerForm: FormGroup;
  public isSubmitted: boolean = false;
  public oldPass: string = '';
  public oldEmail: string = '';
  public oldDisplayName: string = '';
  public uniqueEmailFlag: boolean = true;
  public uniqueDisplayNameFlag: boolean = true;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
    this.registerForm = this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required]],
      displayName: ['', [Validators.required, notEmailValidator("")]],
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
      passwordConfirm: ['', [Validators.required]]
    }, {validators: [this.samePassValidator, this.sameEmailValidator]});
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

  public ngOnInit(): void {}

  ngDoCheck(): void {

    //On email change
    if (this.registerForm.get('email')?.value.toLowerCase() != this.oldEmail){

      this.oldEmail = this.registerForm.get('email')?.value.toLowerCase();
      this.registerForm.controls['displayName'].setValidators(
        Validators.compose([Validators.required, notEmailValidator(this.registerForm.get('email')?.value.split("@", 2)[0].toLowerCase())])
      )
      if (this.registerForm.get('email')?.value.split("@", 2)[0].toLowerCase() === this.registerForm.get('displayName')?.value.toLowerCase()){
        this.registerForm.controls['displayName'].reset();
        this.registerForm.controls['displayName'].setValue(this.registerForm.get('email')?.value.split("@", 2)[0]);
      }
      this.uniqueEmailFlag = true;
    }

    //On Display Name change
    if (this.registerForm.get('displayName')?.value != this.oldDisplayName){
      this.oldDisplayName = this.registerForm.get('displayName')?.value;
      this.uniqueDisplayNameFlag = true;
    }
  }

  public onSubmit() {

    if (this.registerForm.pristine || this.registerForm.invalid) {
      return;
    }

    const { email, displayName, institution, website, password } = this.registerForm.controls;

    this.$http.post('/api/auth/register',
    {
      email:email?.value.toLowerCase(),
      displayName:displayName?.value,
      institution:institution?.value,
      website:website?.value,
      password:password?.value
    }, { observe: 'response' }).subscribe((response: HttpResponse<Object>) => {

      if(response.ok && (response.body?.['error'] === undefined)){
        //User Created
      }
    },
    err => {
      if (err.error?.['error'].message === UniqueError.E_ERR){this.uniqueEmailFlag = false}
      if (err.error?.['error'].message === UniqueError.D_ERR){this.uniqueDisplayNameFlag = false}
      if (err.error?.['error'].message === UniqueError.B_ERR){this.uniqueEmailFlag = false;this.uniqueDisplayNameFlag = false}
    })
  }
}
