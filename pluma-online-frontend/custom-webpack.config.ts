// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { CustomWebpackBrowserSchema, TargetOptions } from'@angular-builders/custom-webpack';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config();

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {

  if (!process || !process.env) {
    throw new Error('Failed to load environment');
  }

  config.plugins.push(
    new webpack.EnvironmentPlugin([
      'API_ENTRYPOINT'
    ])
  );

  return config;
}
