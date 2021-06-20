import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {Test210621Component} from './test210621.component';

describe('TestpageComponent', () => {
  let component: Test210621Component;
  let fixture: ComponentFixture<Test210621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test210621Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test210621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
