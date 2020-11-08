// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'biorg-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(private router: Router) {  }
}
