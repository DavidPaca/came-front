import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  showPassword = false;

  // Credenciales válidas
  private validCredentials = {
    email: 'adminsistemas@gmail.com',
    password: '1234567890'
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;

    // Detener si el formulario es inválido
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';

    // Aquí implementarías la lógica de autenticación
    // Por ahora, simularemos un retraso para mostrar el spinner
    // Simular un retraso para mostrar el spinner
    setTimeout(() => {
      const email = this.f['email'].value;
      const password = this.f['password'].value;

      // Verificar las credenciales
      if (email === this.validCredentials.email && password === this.validCredentials.password) {
        // Autenticación exitosa
        console.log('Autenticación exitosa');

        // Almacenar información de sesión (opcional)
        if (this.f['rememberMe'].value) {
          localStorage.setItem('user', JSON.stringify({ email }));
        } else {
          sessionStorage.setItem('user', JSON.stringify({ email }));
        }

        // Redirigir a la página de inicio
        this.router.navigate(['/admin/home-page']);
      } else {
        // Autenticación fallida
        this.error = 'Correo electrónico o contraseña incorrectos';
      }

      this.loading = false;
    }, 1000); // Reducido a 1 segundo para una mejor experiencia
  }
}