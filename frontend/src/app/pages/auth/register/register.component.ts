import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  togglePasswordVisibility(inputId: string) {
    if (inputId === 'password') {
      this.passwordVisible = !this.passwordVisible;
      const passwordInput = document.getElementById(inputId) as HTMLInputElement;
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    } else if (inputId === 'confirmPassword') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
      const confirmPasswordInput = document.getElementById(inputId) as HTMLInputElement;
      confirmPasswordInput.type = this.confirmPasswordVisible ? 'text' : 'password';
    }
  }

}
