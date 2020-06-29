import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystarupComponent } from './mystarup.component';

describe('MystarupComponent', () => {
  let component: MystarupComponent;
  let fixture: ComponentFixture<MystarupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystarupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystarupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
