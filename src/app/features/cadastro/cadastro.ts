import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cadastro',
  standalone: true,

  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],

  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class CadastroComponent {

  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  mensagem = '';

  constructor(private router: Router) {}

  criarConta(): void {

    if (
      !this.nome ||
      !this.email ||
      !this.senha ||
      !this.confirmarSenha
    ) {

      this.mensagem = 'Preencha todos os campos.';
      return;

    }

    if (this.senha !== this.confirmarSenha) {

      this.mensagem = 'As senhas não são iguais.';
      return;

    }

    if (this.senha.length < 6) {

      this.mensagem = 'A senha deve ter pelo menos 6 caracteres.';
      return;

    }

    const usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    localStorage.setItem(
      'animex_usuario',
      JSON.stringify(usuario)
    );

    localStorage.setItem(
      'animex_logado',
      'true'
    );

    this.router.navigate(['/']);

  }

}