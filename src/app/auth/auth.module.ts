import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyComponent } from './register/verify/verify.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginComponent, RegisterComponent, VerifyComponent],
  providers: []
})
export class AuthModule {}
