// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import './styles.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
} else {
  // @ts-ignore
  /* eslint-disable-next-line unicorn/prefer-module */
  require('zone.js/plugins/zone-error');
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);
