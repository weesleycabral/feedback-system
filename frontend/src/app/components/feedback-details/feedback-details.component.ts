import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.scss']
})
export class FeedbackDetailsComponent {
  @Input() feedback: Feedback | null = null;
  @Input() user: User | null = null;
  @Output() close = new EventEmitter<void>();

  closeDetails(): void {
    this.close.emit();
  }



}
