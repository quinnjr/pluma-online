import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateActivateComponent } from './deactivate-activate.component';

describe('DeleteActivateComponent', () => {
  let component: DeactivateActivateComponent;
  let fixture: ComponentFixture<DeactivateActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
