// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'pluma-online-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  @ViewChild('navbarBurger')
  private navbarBurger!: ElementRef;
  @ViewChild('navbarMenu')
  private navbarMenu!: ElementRef;

  constructor(private readonly router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // this.navbarBurger.nativeElement.classList.remove('is-active');
        // this.navbarMenu.nativeElement.classList.remove('is-active');
      }
    });
  }

  public toggleNavbar() {
    // this.navbarBurger.nativeElement.classList.toggle('is-active');
    // this.navbarMenu.nativeElement.classList.toggle('is-active');
  }
}
