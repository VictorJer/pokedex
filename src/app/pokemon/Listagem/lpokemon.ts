import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonService } from '../data/pokemon.service';
import { Pokemon } from '../pokemon.model';

export function paraTitleCase(texto: string): string {
  return texto.toLocaleLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}

@Component({
  imports: [],
  selector: 'app-lpokemon',
  templateUrl: './lpokemon.html',
})
export class LPokemon {
  protected readonly pokemonService = inject(PokemonService);

  protected readonly listagemPokemon = toSignal(
    this.pokemonService.listar(),
    { initialValue: [] as Pokemon[], }
  );

  protected readonly paraTitleCase = paraTitleCase;
}
