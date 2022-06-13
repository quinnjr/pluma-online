import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ApolloTestingModule } from 'apollo-angular/testing';

import { LoginComponent } from './login.component';
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
  RecaptchaFormsModule,
  RECAPTCHA_LANGUAGE,
  RecaptchaComponent,
  RecaptchaModule
} from 'ng-recaptcha';
import { LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaV3Module,
        RecaptchaFormsModule,
        RouterTestingModule,
        ApolloTestingModule,
        CommonModule
      ],
      declarations: [LoginComponent],
      providers: [
        {
          provide: RECAPTCHA_V3_SITE_KEY,
          useValue: process.env.RECAPTCHA_SITE_KEY
        },
        {
          provide: RECAPTCHA_LANGUAGE,
          useFactory: (locale: string) => locale,
          deps: [LOCALE_ID]
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
