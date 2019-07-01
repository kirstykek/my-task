import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPiorityComponent } from './my-piority.component';

describe('MyPiorityComponent', () => {
  let component: MyPiorityComponent;
  let fixture: ComponentFixture<MyPiorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPiorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPiorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
