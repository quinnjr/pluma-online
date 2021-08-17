// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'pluma-online-pluma-sidebar',
  template: `
    <aside class="menu">
      <p class="menu-label">Download PluMA</p>
      <ul class="menu-list">
        <li>
          <a routerLink="/software/pluma">PluMA Home</a>
        </li>
        <li>
          <a href="https://github.com/FIUBioRG/PluMA" target="_blank"
            >PluMA Github Site</a
          >
        </li>
        <li>
          <a href="#">PluMA Userguide</a>
        </li>
        <li>
          <a routerLink="/software/pluma/plugins">PluMA Plugin Pool</a>
        </li>
        <li>
          <a routerLink="/software/pluma/pipelines">PluMA Pipeline Pool</a>
        </li>
      </ul>
    </aside>
  `
})
export class SidebarComponent {}
