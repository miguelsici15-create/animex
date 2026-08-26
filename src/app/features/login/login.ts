import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],

  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  email = '';
  senha = '';

  mensagem = '';

  constructor(private router: Router) {}

  entrar(): void {

    const usuarioSalvo = localStorage.getItem('animex_usuario');

    if (!usuarioSalvo) {
      this.mensagem = 'Nenhuma conta encontrada. Crie uma conta primeiro.';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (
      usuario.email === this.email &&
      usuario.senha === this.senha
    ) {

      localStorage.setItem('animex_logado', 'true');

      this.router.navigate(['/']);

    } else {

      this.mensagem = 'E-mail ou senha incorretos.';

    }

  }

}