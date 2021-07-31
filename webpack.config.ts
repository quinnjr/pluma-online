// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import glob from 'glob';
import { join } from 'path';

import { CustomWebpackBrowserSchema, TargetOptions } from'@angular-builders/custom-webpack';
import {
  Configuration,
  DefinePlugin,
  EnvironmentPlugin,
  IgnorePlugin
} from 'webpack';
// @ts-ignore
import DotenvPlugin from 'dotenv-webpack';
// @ts-ignore
import * as WebpackAssetsManifest from 'webpack-assets-manifest';
// @ts-ignore
import nodeExternals from 'webpack-node-externals';

const SriPlugin = require('webpack-subresource-integrity');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

import * as pkg from './package.json';

const HASHES = ['sha256', 'sha384']


export default (
  config: Configuration,
  _options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {

  if (!process || !process.env) {
    throw new Error('Failed to load environment');
  }

  config.output!.crossOriginLoading = 'anonymous';

  config.module!.rules!.push({
    test: /\.md$/,
    use: ['html-loader', 'markdown-loader']
  });

  config.plugins!.push(
    new DotenvPlugin({
      safe: true,
      allowEmptyValues: false
    }),
    new DefinePlugin({
      APP_VERSION: pkg.version
    }),
    new EnvironmentPlugin(['ENV'])
  );

  Object.assign(config, {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  });

  if (targetOptions.target === 'browser') {
    config.plugins!.push(
      new PurgeCSSPlugin({
        paths: glob.sync(`${join(__dirname, 'src')}**/*.html`, { nodir: true })
      }),
      new SriPlugin({
        enabled: process.env.ENV === 'production',
        hashFuncNames: HASHES
      }),
      new WebpackAssetsManifest({
        enabled: process.env.ENV === 'production',
        integrity: true,
        integrityHashes: HASHES
      })
    )
  }

  if (['server', 'serve-ssr'].includes(targetOptions.target)) {
    config.resolve!.extensions!.push('.mjs', '.graphql', '.gql');

    config.module!.rules!.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });

    config.externals = [
      nodeExternals({
        allowlist: [/^(?!(livereload|concurrently|fsevents)).*/]
      })
    ];

    config.plugins!.push(
      new IgnorePlugin({
        checkResource(resource: string): boolean {
          const imports = [
            '@nestjs/microservices',
            '@nestjs/microservices/microservices-module',
            '@nestjs/websockets/socket-module',
            'cache-manager',
            'class-validator',
            'class-transformer',
            'apollo-server-fastify',
            'bufferutil',
            'utf-8-validate'
          ];

          if (!imports.includes(resource)) {
            return false;
          }

          try {
            require.resolve(resource);
          } catch (err) {
            return true;
          }

          return false;
        }
      })
    );
  }

  return config;
}
