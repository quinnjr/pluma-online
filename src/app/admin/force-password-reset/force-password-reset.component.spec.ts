import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcePasswordResetComponent } from './force-password-reset.component';

describe('ForcePasswordResetComponent', () => {
  let component: ForcePasswordResetComponent;
  let fixture: ComponentFixture<ForcePasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForcePasswordResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcePasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
