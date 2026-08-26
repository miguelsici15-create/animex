import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { CatalogoComponent } from './features/catalogo/catalogo';
import { AnimeDetalhes } from './features/anime-detalhes/anime-detalhes';

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
    path: '**',
    redirectTo: ''
  }

];