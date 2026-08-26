import { Component } from '@angular/core';
import { AnimeService } from '../../core/anime.service';
import { Anime } from '../../core/models/anime.model';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
   imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {

  animes: Anime[] = [];

  destaque!: Anime;

  constructor(
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {

    this.animes = this.animeService.listar();

    this.destaque = this.animes[0];

  }

}