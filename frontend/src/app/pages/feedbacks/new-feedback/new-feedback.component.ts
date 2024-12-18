import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-feedback',
  templateUrl: './new-feedback.component.html',
  styleUrls: ['./new-feedback.component.scss']
})
export class NewFeedbackComponent implements OnInit {
  users: User[] = [];
  feedbackForm: FormGroup;
  currentUserEmail: string | null = null;

  constructor(
    private fb: FormBuilder,
    private feedbackService: FeedbackService,
    private userService: UserService
  ) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      recipient: ['', Validators.required],
      feedback: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.currentUserEmail = sessionStorage.getItem('email');
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users.filter(user => user.email !== this.currentUserEmail);
    });
  }

  submitFeedback() {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    const feedbackData: Feedback = this.feedbackForm.value;
    this.feedbackService.newFeedback(feedbackData).subscribe({
      next: () => {
        alert('Feedback enviado com sucesso!');
        this.feedbackForm.reset();
      },
      error: () => {
        alert('Ocorreu um erro ao enviar o feedback.');
      }
    });
  }



}
