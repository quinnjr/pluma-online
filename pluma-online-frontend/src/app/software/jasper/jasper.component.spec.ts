import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JasperComponent } from './jasper.component';

describe('JasperComponent', () => {
  let component: JasperComponent;
  let fixture: ComponentFixture<JasperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JasperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JasperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
