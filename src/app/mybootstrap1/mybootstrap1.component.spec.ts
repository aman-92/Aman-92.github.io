import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mybootstrap1Component } from './mybootstrap1.component';

describe('Mybootstrap1Component', () => {
  let component: Mybootstrap1Component;
  let fixture: ComponentFixture<Mybootstrap1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mybootstrap1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mybootstrap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
