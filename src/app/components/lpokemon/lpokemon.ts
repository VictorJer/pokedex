import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { forkJoin, map, switchMap } from 'rxjs';

interface RestostaObjHttp {
  name: string;
  url: string;
}

interface ObjetoRespostaHttp {
  cont: number;
  next: string | null;
  previous: string | null;
  results: RestostaObjHttp[];
}

interface TipoPokemonRespostaHttp {
  type: {
    name: string;
  };
}

interface PokemonRespostaHttp {
  id: number;
  name: string;
  types: TipoPokemonRespostaHttp[];
  sprites: {
    front_default: string | null;
  };
}

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string | null;
}

@Component({
  imports: [],
  selector: 'app-lpokemon',
  templateUrl: './lpokemon.html',
})
export class LPokemon {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  protected readonly listagemPokemon = toSignal(
    this.http.get<ObjetoRespostaHttp>(this.apiUrl).pipe(
      switchMap((obj) => {
        const requisicoes = obj.results.map((r) => this.http.get<PokemonRespostaHttp>(r.url));

        return forkJoin(requisicoes);
      }),
      map((detalhes: PokemonRespostaHttp[]): Pokemon[] =>
        detalhes.map((detalhe) => ({
          id: detalhe.id,
          name: detalhe.name,
          types: detalhe.types.map((item) => item.type.name),
          sprite: detalhe.sprites.front_default,
        })),
      ),
    ),
    {
      initialValue: null,
    },
  );
}
