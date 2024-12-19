import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private userService: UserService,
    private toastService: ToastrService,
    private router: Router
  ) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      to: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.currentUserEmail = sessionStorage.getItem('email');
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.users = users.filter(user => user.email !== this.currentUserEmail);
    });
  }

  submitFeedback() {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }

    const feedbackData: Feedback = this.feedbackForm.value;
    console.log(feedbackData);
    this.feedbackService.newFeedback(feedbackData).subscribe({
      next: () => {
        this.feedbackForm.reset();
        this.toastService.success("Feedback enviado com sucesso!");
        this.router.navigate(['/dashboard']);
      },
      error: (e) => {
        this.toastService.error("Ocorreu um erro!");
        console.log(e);
      }
    });
  }



}
