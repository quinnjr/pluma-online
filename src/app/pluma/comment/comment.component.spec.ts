import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CommentComponent } from './comment.component';

@Component({
  selector: 'pluma-online-test-component',
  template: `<pluma-online-comment [comment]="data"></pluma-online-comment>`
})
class TestComponent {
  public data = `# Test Heading

* Test List
* Test List
* Test List
  `;
}

describe('CommentComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeAll(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, CommentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: fix this test
  it.skip('should render the markdown correctly', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    const ul = fixture.debugElement.query(By.css('ul'));

    expect(h1).toBeTruthy();
    expect(h1.nativeElement.text).toBe('Test Heading');

    expect(ul).toBeTruthy();
    expect(ul.children.length).toBe(3);
  });
});
