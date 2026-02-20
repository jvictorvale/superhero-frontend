import { Superpoderes } from "./superpoderes.model";

export interface Heroi {
  id: number;
  nome: string;
  nomeHeroi: string;
  dataNascimento?: string;
  altura: number;
  peso: number;
  superpoderes: Superpoderes[];
}
