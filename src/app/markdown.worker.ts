// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

/// <reference lib="webworker" />

import { marked } from 'marked';

addEventListener(
  'message',
  ({ data }: { data: { config: any; value: string } }) => {
    marked.setOptions(data.config);
    const output = marked.parse(data.value);
    postMessage(output);
  }
);
