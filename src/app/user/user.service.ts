import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../../../server/@generated/prisma-graphql/user';
import { Role } from './role';

const defaultUser = {
  id: '00000000-0000-0000-0000-000000000000',
  email: 'nobody@nodbody.com',
  displayName: 'Guest',
  website: '',
  role: Role.Guest,
  avatar: '',
  enabled: true
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User>;

  constructor() {
    this.userSubject = new BehaviorSubject(defaultUser as unknown as User);
  }

  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public login(user: User): void {
    this.userSubject.next(user);
  }

  public logout(): boolean {
    this.userSubject.next(defaultUser as unknown as User);
    return true;
  }

  public isLoggedIn(): Observable<boolean> {
    return this.userSubject
      .asObservable()
      .pipe(map((user) => user.role !== Role.Guest));
  }

  public isAdmin(): Observable<boolean> {
    return this.userSubject
      .asObservable()
      .pipe(map((user) => user.role === Role.Admin));
  }
}
