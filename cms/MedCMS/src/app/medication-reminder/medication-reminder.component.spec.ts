import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationReminderComponent } from './medication-reminder.component';

describe('MedicationReminderComponent', () => {
  let component: MedicationReminderComponent;
  let fixture: ComponentFixture<MedicationReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
