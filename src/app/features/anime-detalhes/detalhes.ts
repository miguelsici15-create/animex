import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AnimeService } from '../../core/anime.service';
import { Anime } from '../../core/models/anime.model';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalhes',
  standalone: true,

  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule
  ],

  templateUrl: './detalhes.html',
  styleUrl: './detalhes.scss'
})
export class DetalhesComponent implements OnInit {

  anime?: Anime;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.anime = this.animeService.buscarPorId(id);

  }

  voltar(): void {
    this.router.navigate(['/catalogo']);
  }

}