// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { BackendService, BackendResponse } from '../backend.service';

@Component({
  selector: 'biorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private backend: BackendService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  public ngOnInit(): void {
  }

  public onSubmit() {
    if (this.loginForm.pristine || this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.backend.post('/auth', { email, password }, { observe: 'response' })
      .subscribe((response: HttpResponse<BackendResponse<string>>) => {
        console.log(response);
        if (response.ok) {
          console.log(response.body);
        } else {
          console.error(`Http Response Error (${response.status}): ${response.statusText}`);
        }
      })
  }
}
