import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'prisma';
import merge from 'lodash.merge';
import { Role } from '@prisma/client';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User | null>;

  constructor(private readonly $apollo: Apollo) {
    this.userSubject = new BehaviorSubject(null);
  }

  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public login(user: User): void {
    this.userSubject.next(user);
  }

  public update(user: User): void {
    let oldUser = this.userSubject.value;
    merge(oldUser, user);
    this.userSubject.next(oldUser);
  }

  public logout(): boolean {
    this.userSubject.next(null);
    return true;
  }

  public isLoggedIn(): Observable<boolean> {
    return this.userSubject
      .asObservable()
      .pipe(map((user) => user.role !== Role.Guest));
  }

  public isAdmin(): Observable<boolean> {
    return this.$apollo
      .query({
        query: gql(`
        {
          roleCheck {
            role
          }
        }
      `)
      })
      .pipe(
        map((user: User | null) => Role.Admin === user.data.roleCheck.role)
      );
  }
}
