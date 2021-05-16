// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { Map } from 'immutable';

export interface CacheItem<T> {
  expiry: string;
  data: T;
}

/**
 * A light wrapper around the SessionStorage API to use more `Map`-based
 * methods.
 *
 * This service does not extend the SessionStorage API to be asynchronous.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private store = window.sessionStorage;

  constructor() {  }

  /**
   *
   */
  public get<T=unknown>(key: string): T | null {
    const value = JSON.parse(this.store.getItem(key));

    if (!value) {
      return null;
    } else {
      const now = DateTime.utc();
      const expiry = DateTime.fromISO(value.expiry);

      if (now >= expiry) {
        this.delete(key);
        return null;
      } else {
        return value.data;
      }
    }
  }

  /**
   *
   */
  public set<T=unknown>(key: string, value: T): void {
    return this.store.setItem(key, JSON.stringify(value));
  }

  /**
   *
   */
  public delete(key: string): void {
    return this.store.removeItem(key);
  }

  /**
   * Clears all Key-Value pairs from the SessionStorage store.
   */
  public clear(): void {
    return this.store.clear();
  }

  /**
   * Checks if a key is in the SessionStorage store.
   */
  public has(key: string): boolean {
    for (let i = 0; i < this.store.length; i++) {
      const item = this.store.key(i);
      if (key === item) {
        return true;
      }
    }
    return false;
  }

  /**
   *
   */
  public size(): number {
    return this.store.length;
  }
}
