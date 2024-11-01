import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

interface RegisterForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup<RegisterForm>;
  user: User;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const passwordConfirm = form.get('passwordConfirm')?.value;
    return password === passwordConfirm ? null : { mismatch: true };
  }

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.loginService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).subscribe({
      next: (res) => {
        console.log(res);
        this.toastService.success("Registro feito com sucesso!");
        this.goForLoginPage();
      },
      error: () => this.toastService.error("Ocorreu um erro!")
    })
  }

  goForLoginPage() {
    this.router.navigate(['/login']);
  }

}
