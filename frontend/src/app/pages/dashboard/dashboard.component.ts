import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  goToNewFeedbackPage(): void {
    this.router.navigate(['/dashboard/new-feedback']);
  }

}
