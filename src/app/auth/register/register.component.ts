import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { notEmailValidator } from "./verify/validate/same-as-email.directive";
import { samePassValidator } from "./verify/validate/pass-match.directive";
import { HttpResponse, HttpClient } from '@angular/common/http';
import { UniqueError } from "../../../../server/auth/uniqueError";

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
      passwordConfirm: ['', [Validators.required, samePassValidator("")]]
    });
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

    //On Password change
    if (this.registerForm.get('password')?.value != this.oldPass){
      this.oldPass = this.registerForm.get('password')?.value;
      this.registerForm.controls['passwordConfirm'].setValidators(
        Validators.compose([Validators.required, samePassValidator(this.registerForm.get('password')?.value)])
      )
      if (this.registerForm.get('password')?.value === this.registerForm.get('passwordConfirm')?.value){
        this.registerForm.controls['passwordConfirm'].reset();
        this.registerForm.controls['passwordConfirm'].setValue(this.registerForm.get('password')?.value);
      }
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
