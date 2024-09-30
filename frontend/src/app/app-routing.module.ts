import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewFeedbackComponent } from './pages/feedbacks/new-feedback/new-feedback.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login - Feedback System' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register - Feedback System' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard - Feedback System' }
  },
  {
    path: 'new-feedback',
    component: NewFeedbackComponent,
    data: { title: 'New Feedback - Feedback System' }
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
