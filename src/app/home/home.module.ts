import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, SidebarComponent],
  exports: [HomeComponent, SidebarComponent]
})
export class HomeModule {}
