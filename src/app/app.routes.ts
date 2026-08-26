import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { CatalogoComponent } from './features/catalogo/catalogo';
import { AnimeDetalhes } from './features/anime-detalhes/anime-detalhes';
import { LoginComponent } from './features/login/login';
import { CadastroComponent } from './features/cadastro/cadastro';
export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'catalogo',
    component: CatalogoComponent
  },

  {
    path: 'anime/:id',
    component: AnimeDetalhes
  },


    {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'cadastro',
    component: CadastroComponent
  },

  {
    path: '**',
    redirectTo: ''
  },


];




