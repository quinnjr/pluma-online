import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortalComponent } from './user-portal.component';

describe('UserPortalComponent', () => {
  let component: UserPortalComponent;
  let fixture: ComponentFixture<UserPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
