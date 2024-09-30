import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeedbackComponent } from './new-feedback.component';

describe('NewFeedbackComponent', () => {
  let component: NewFeedbackComponent;
  let fixture: ComponentFixture<NewFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFeedbackComponent]
    });
    fixture = TestBed.createComponent(NewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
