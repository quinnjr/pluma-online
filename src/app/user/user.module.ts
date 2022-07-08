import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from './user-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserPortalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class UserModule {}
