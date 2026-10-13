import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokemonService } from '../data/pokemon.service';
import { Pokemon } from '../pokemon.model';
import { map } from 'rxjs';

interface PokemonTypeViewModel {
  readonly name: string;
  readonly displayName: string;
}

interface PokemonCardViewModel {
  readonly id: number;
  readonly displayName: string;
  readonly imageUrl: string | null;
  readonly imageAlt: string;
  readonly types: readonly PokemonTypeViewModel [];
}

export function paraTitleCase(texto: string): string {
  return texto.toLocaleLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}

function paraCardViewModel(dto: Pokemon): PokemonCardViewModel {
  const displayName = paraTitleCase(dto.name);
  const types = dto.types.map(type => ({
    name: type,
    displayName: paraTitleCase(type)
  }));

  return {
    id: dto.id,
    displayName: displayName,
    imageUrl: dto.sprite,
    imageAlt: `Imagem de ${displayName}`,
    types: types,
  }
}

@Component({
  imports: [],
  selector: 'app-lpokemon',
  templateUrl: './lpokemon.html',
})
export class LPokemon {
  protected readonly pokemonService = inject(PokemonService);

  protected readonly listagemPokemon = toSignal(
    this.pokemonService.listar().pipe(map((pokemon) => pokemon.map(paraCardViewModel))),
    { initialValue: [] as PokemonCardViewModel[], }
  );

  protected readonly paraTitleCase = paraTitleCase;
}
