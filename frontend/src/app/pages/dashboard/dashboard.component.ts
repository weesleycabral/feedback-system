import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { User } from 'src/app/models/user.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string | null = '';
  feedbacks: Feedback[] = [];
  users: { [key: string]: User } = {};
  isLoading: boolean = true;
  selectedFeedback: Feedback | null = null;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private feedbackService: FeedbackService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
    // if (!this.userName) {
    //   // Redirecione para a página de login ou exiba uma mensagem de erro
    //   this.router.navigate(['/login']);
    // }
    this.getFeedbacks();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  goToNewFeedbackPage(): void {
    this.router.navigate(['/dashboard/new-feedback']);
  }

  getFeedbacks(): void {
    const userId = sessionStorage.getItem('id');
    if (userId) {
      this.feedbackService.getFeedbacksById(userId).subscribe((feedbacks: any) => {
        console.log(feedbacks);
        this.feedbacks = feedbacks as Feedback[];
        this.loadUserDetails();
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
    }
  }

  loadUserDetails(): void {
    this.feedbacks.forEach(feedback => {
      if (!this.users[feedback.senderId]) {
        this.userService.getUserById(feedback.senderId).subscribe((user: User) => {
          this.users[feedback.senderId] = user;
        });
      }
    });
  }

  deleteFeedback(id: string): void {
    this.feedbackService.deleteFeedback(id).subscribe(() => {
      this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== id);
    });
  }

  viewFeedback(feedback: Feedback): void {
    this.selectedFeedback = feedback;
  }

  closeDetails(): void {
    this.selectedFeedback = null;
  }

}
