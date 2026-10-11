import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

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

@Component({
  imports: [],
  selector: 'app-lpokemon',
  templateUrl: './lpokemon.html',
})
export class LPokemon {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  protected readonly listagemPokemon = toSignal(this.http.get<ObjetoRespostaHttp>(this.apiUrl), {
    initialValue: null,
  });

  constructor() {}
}
