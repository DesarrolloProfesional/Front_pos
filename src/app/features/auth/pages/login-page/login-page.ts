import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  loading = false;
  error = '';

  // 🔥 Form dinámico
  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  });

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';

    const { username, password } = this.form.value;

    setTimeout(() => {
      if (username === 'admin' && password === '1234') {

        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', 'fake-jwt-token');
        }

        this.router.navigate(['/dashboard']);
      } else {
        this.error = 'Usuario o contraseña incorrectos';
      }

      this.loading = false;
    }, 800);
  }

  // helpers (limpia el HTML)
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
}
