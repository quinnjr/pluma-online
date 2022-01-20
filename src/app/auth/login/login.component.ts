// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

import { AuthService } from '../auth.service';
import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pluma-online-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public isSubmitted: boolean = false;

  private recaptcha?: Subscription;

  constructor(
    private readonly $fb: FormBuilder,
    private readonly $auth: AuthService,
    private readonly $recaptchaService: ReCaptchaV3Service
  ) {
    this.loginForm = this.$fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      recaptcha: [null, Validators.required]
    });
  }

  public ngOnInit(): void {
    // eslint-disable-next-line rxjs-angular/prefer-async-pipe
    this.recaptcha = this.$recaptchaService.onExecute.subscribe(
      (data: OnExecuteData) => {
        this.handleRecaptchaExecute(data.action, data.token);
      }
    );
  }

  public ngOnDestroy() {
    if (this.recaptcha) {
      this.recaptcha.unsubscribe();
    }
  }

  public onSubmit() {
    if (this.loginForm.pristine || this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // this.backend.post('/auth', { email, password }, { observe: 'response' })
    //   .subscribe((response: HttpResponse<BackendResponse<string>>) => {
    //     console.log(response);
    //     if (response.ok) {
    //       console.log(response.body);
    //     } else {
    //       console.error(`Http Response Error (${response.status}): ${response.statusText}`);
    //     }
    //   })
  }

  private handleRecaptchaExecute(action: string, token: string) {}
}
