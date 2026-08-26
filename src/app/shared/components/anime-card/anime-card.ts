import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Anime } from '../../../core/models/anime.model';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-anime-card',

  standalone: true,

  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],

  templateUrl: './anime-card.html',

  styleUrl: './anime-card.scss'
})
export class AnimeCard {

  @Input() anime!: Anime;

}