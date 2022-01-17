// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { Observable, of, fromEvent } from 'rxjs';

@Pipe({
  name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {
  private worker?: Worker;
  private config: any = {
    pedantic: false,
    gfm: true,
    sanitize: true,
    smartLists: true,
    xhtml: true
  };

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./markdown.worker', import.meta.url));
    } else {
      marked.setOptions(this.config);
    }
  }

  public transform(value: string): Observable<string> {
    if (value && value.length > 0) {
      if (this.worker) {
        this.worker.postMessage({
          data: {
            config: this.config,
            value
          }
        });

        return fromEvent<string>(this.worker, 'message');
      } else {
        const output = marked.parse(value);
        return of(output);
      }
    } else {
      return of();
    }
  }
}
