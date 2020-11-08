// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import './styles.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  // @ts-ignore
  require('zone.js/dist/zone-error');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(console.error);
