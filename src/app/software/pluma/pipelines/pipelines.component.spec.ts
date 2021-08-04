import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinesComponent } from './pipelines.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('PipelinesComponent', () => {
  let component: PipelinesComponent;
  let fixture: ComponentFixture<PipelinesComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PipelinesComponent, SidebarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
