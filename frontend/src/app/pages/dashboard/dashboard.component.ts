import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName: string | null = '';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private feedbackService: FeedbackService
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

  getFeedbacks() {
    const userId = sessionStorage.getItem('id');
    if (userId) {
      this.feedbackService.getFeedbacksById(userId).subscribe((feedbacks) => {
        console.log(feedbacks);
      });
    }
  }

}
