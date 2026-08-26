import { Component, Input } from '@angular/core';
import { Anime } from '../../../core/models/anime.model';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatCardModule, RouterLink],
  selector: 'app-anime-card',
  templateUrl: './anime-card.html',
  styleUrl: './anime-card.scss'
})
export class AnimeCardComponent {

  @Input() anime!: Anime;

}