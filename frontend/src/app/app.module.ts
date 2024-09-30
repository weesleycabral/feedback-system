import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TitleService } from './services/title.service';
import { NewFeedbackComponent } from './pages/feedbacks/new-feedback/new-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TitleService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
