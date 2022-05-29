import { Component, OnDestroy, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { sameAsEmailValidator } from "./verify/validate/same-as-email.directive";
import { samePassValidator } from "./verify/validate/pass-match.directive";
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'pluma-online-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy, DoCheck {
  public registerForm: FormGroup;
  public isSubmitted: boolean = false;
  public oldPass: string = '';
  public oldEmail: string = '';
  public oldDName: string = '';
  public uniqueE: boolean = true;
  public uniqueD: boolean = true;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $http: HttpClient
  ) {
    this.registerForm = this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      dName: ['', [Validators.required, sameAsEmailValidator("")]],
      institution: [''],
      website: [''],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/)]],
      passwordConfirm: ['', [Validators.required, samePassValidator("")]]
    });
  }

  public ngOnInit(): void {}

  ngDoCheck(): void {

    //On email change
    if (this.registerForm.get('email')?.value.toLowerCase() != this.oldEmail){

      this.oldEmail = this.registerForm.get('email')?.value.toLowerCase();
      this.registerForm.controls['dName'].setValidators(
        Validators.compose([Validators.required, sameAsEmailValidator(this.registerForm.get('email')?.value.split("@", 2)[0].toLowerCase())])
      )
      if (this.registerForm.get('email')?.value.split("@", 2)[0].toLowerCase() === this.registerForm.get('dName')?.value.toLowerCase()){
        this.registerForm.controls['dName'].reset();
        this.registerForm.controls['dName'].setValue(this.registerForm.get('email')?.value.split("@", 2)[0]);
      }
      this.uniqueE = true;
    }

    //On Display Name change
    if (this.registerForm.get('dName')?.value != this.oldDName){
      this.oldDName = this.registerForm.get('dName')?.value;
      this.uniqueD = true;
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

  public ngOnDestroy() {}

  public onSubmit() {
    console.log(this.registerForm);
    if (this.registerForm.pristine || this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.get('email')?.value;
    const displayName = this.registerForm.get('dName')?.value;
    const institution = this.registerForm.get('institution')?.value;
    const website = this.registerForm.get('website')?.value;
    const password = this.registerForm.get('password')?.value;

    this.$http.post('/api/auth/register',
    {
      email:email,
      displayName:displayName,
      institution:institution,
      website:website,
      password:password
    }, { observe: 'response' }).subscribe((response: HttpResponse<Object>) => {

      if(response.ok && (response.body?.['error'] === undefined)){
        //User Created
      }else{
        if (response.body?.['error'].message === 0){this.uniqueE = false}
        if (response.body?.['error'].message === 1){this.uniqueD = false}
        if (response.body?.['error'].message === 2){this.uniqueE = false;this.uniqueD = false}
      }
    });
  }
}
