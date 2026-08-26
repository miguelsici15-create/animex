import { Injectable } from '@angular/core';
import { Anime } from './models/anime.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private animes: Anime[] = [
    {
      id: 1,
      titulo: 'One Piece',
      tituloOriginal: 'One Piece',
      descricao: 'Monkey D. Luffy parte em uma grande aventura em busca do One Piece.',
      imagem: 'https://s1.zerochan.net/ONE.PIECE.600.4250504.jpg',
      banner: 'https://www.fujitv.co.jp/muscat/photo/20195550_02.jpg',
      genero: ['Ação', 'Aventura', 'Comédia'],
      ano: 1999,
      episodios: 1100,
      nota: 9.5,
      status: 'Em lançamento'
    },

    {
      id: 2,
      titulo: 'Naruto',
      tituloOriginal: 'Naruto',
      descricao: 'Naruto Uzumaki sonha em se tornar o maior ninja de sua vila.',
      imagem: 'https://image.tmdb.org/t/p/original/ekkT8myO7RcmcR7odMAXOC3b5IZ.jpg',
      banner: 'https://images.unsplash.com/photo-1614583224978-f2c8f9b6e6f3?w=1600',
      genero: ['Ação', 'Aventura', 'Ninja'],
      ano: 2002,
      episodios: 720,
      nota: 9.0,
      status: 'Finalizado'
    },

    {
      id: 3,
      titulo: 'Bleach',
      tituloOriginal: 'Bleach',
      descricao: 'Ichigo Kurosaki recebe poderes de Shinigami e começa uma grande batalha.',
      imagem: 'https://pbs.twimg.com/media/HCYsnaLWcAADG-j.jpg',
banner: 'https://pbs.twimg.com/media/HCYsnaLWcAADG-j.jpg',
      genero: ['Ação', 'Fantasia'],
      ano: 2004,
      episodios: 366,
      nota: 8.9,
      status: 'Finalizado'
    }
  ];

  listar(): Anime[] {
    return this.animes;
  }

  buscar(termo: string): Anime[] {

    const texto = termo.toLowerCase().trim();

    return this.animes.filter(anime =>
      anime.titulo.toLowerCase().includes(texto)
    );
  }

  buscarPorId(id: number): Anime | undefined {

    return this.animes.find(anime =>
      anime.id === id
    );
  }
}