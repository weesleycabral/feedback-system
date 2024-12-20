import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TitleService } from './services/title.service';
import { NewFeedbackComponent } from './pages/feedbacks/new-feedback/new-feedback.component';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './services/auth-guard.service';
import { FeedbackDetailsComponent } from './components/feedback-details/feedback-details.component';


import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewFeedbackComponent,
    RegisterComponent,
    LoginComponent,
    FeedbackDetailsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    FormsModule
  ],
  providers: [TitleService, Title, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
