import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasklistComponent } from './my-tasklist.component';

describe('MyTasklistComponent', () => {
  let component: MyTasklistComponent;
  let fixture: ComponentFixture<MyTasklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
