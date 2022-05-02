import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from 'prisma';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User | null>;

  constructor() {
    this.userSubject = new BehaviorSubject(null);
  }

  public get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  public login(user: User): void {
    this.userSubject.next(user);
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
    return this.userSubject
      .asObservable()
      .pipe(map((user) => user.role === Role.Admin));
  }
}
