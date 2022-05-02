// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

// eslint-disable unicorn/prefer-optional-catch-binding, unicorn/prefer-module, unicorn/prefer-optional-catch-binding

import { join } from 'node:path';

import {
  CustomWebpackBrowserSchema,
  TargetOptions
} from '@angular-builders/custom-webpack';
import {
  Configuration,
  DefinePlugin,
  IgnorePlugin,
  ProvidePlugin
} from 'webpack';
// @ts-ignore
import * as WebpackAssetsManifest from 'webpack-assets-manifest';

const nodeExternals = require('webpack-node-externals');
const SriPlugin = require('webpack-subresource-integrity');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const glob = require('glob');
const DotenvPlugin = require('dotenv-webpack');

import * as pkg from './package.json';
import e from 'express';

const HASHES = ['sha256', 'sha384'];

export default (
  config: Configuration,
  _options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  config.target = 'web';
  config.output!.crossOriginLoading = 'anonymous';

  config.watchOptions = {
    ignored: ['**/node_modules'],
    poll: 1000
  };

  config.plugins!.push(
    new DotenvPlugin({
      safe: false,
      systemvars: true,
    }),
    new DefinePlugin({
      APP_VERSION: pkg.version
    })
  );

  if (targetOptions.target === 'browser') {

    config.module!.rules!.push({
      test: /\.md$/,
      use: ['html-loader', 'markdown-loader']
    });

    if (process.env.ENV === 'production') {
      config.plugins!.push(
        new PurgeCSSPlugin({
          paths: glob.sync(`${join(__dirname, 'src')}**/*.html`, {
            nodir: true
          })
        }),
        new SriPlugin({
          enabled: process.env.ENV === 'production',
          hashFuncNames: HASHES
        })
      );
    }
  }

  if (targetOptions.target === 'server') {
    config.target = 'node';

    config.resolve!.extensions!.push(
      '.mjs',
      '.graphql',
      '.gql',
      '.node',
      '.prisma'
    );

    config.resolve!.fallback = {
      querystring: require.resolve('querystring')
    };

    config.module!.rules!.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });

    (config.externals as Array<any>).push(
      nodeExternals({
        allowlist: [/^(?!(livereload|concurrently|fsevents)).*/]
      })
    );

    config.plugins!.push(
      new IgnorePlugin({
        checkResource(resource: string): boolean {
          const imports = [
            '@nestjs/microservices',
            '@nestjs/microservices/microservices-module',
            '@nestjs/websockets/socket-module',
            'apollo-server-fastify',
            'cache-manager',
            'class-validator',
            'class-transformer',
            'ts-morph',
            'supertest',
            'formidable',
            'class-transformer/storage',
            'fsevents',
            'bufferutil',
            'utf-8-validate',
            'react',
            'ssh2',
            'node-gyp',
            '@ts-morph/common',
            '@apollo/federation'
          ];

          if (!imports.includes(resource)) {
            return false;
          }

          try {
            require.resolve(resource);
            // eslint-disable-next-line unicorn/prefer-optional-catch-binding
          } catch (error) {
            return true;
          }

          return false;
        }
      })
    );
  }

  return config;
};
