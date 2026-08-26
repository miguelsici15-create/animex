export interface Anime {
  id: number;
  titulo: string;
  tituloOriginal?: string;
  descricao: string;
  imagem: string;
  banner: string;
  genero: string[];
  ano: number;
  episodios: number;
  nota: number;
  status: string;
}