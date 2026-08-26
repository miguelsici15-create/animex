import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AnimeService } from '../../core/anime.service';
import { Anime } from '../../core/models/anime.model';
import { AnimeCardComponent } from '../../shared/components/anime-card/anime-card';


imports: [ FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  RouterLink,
  AnimeCardComponent]

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,

    AnimeCardComponent
  ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss'
})
export class CatalogoComponent {
   animes: Anime[] = [];

  busca = '';

  constructor(
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    this.animes = this.animeService.listar();
  }

  pesquisar(): void {

    if (this.busca.trim() === '') {
      this.animes = this.animeService.listar();
      return;
    }

    this.animes = this.animeService.buscar(this.busca);
  }

}



    