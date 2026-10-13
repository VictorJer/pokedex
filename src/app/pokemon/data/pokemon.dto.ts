export interface RestostaObjHttp {
  name: string;
  url: string;
}

export interface ObjetoRespostaHttp {
  cont: number;
  next: string | null;
  previous: string | null;
  results: RestostaObjHttp[];
}

export interface TipoPokemonRespostaHttp {
  type: {
    name: string;
  };
}

export interface PokemonRespostaHttp {
  id: number;
  name: string;
  types: TipoPokemonRespostaHttp[];
  sprites: {
    front_default: string | null;
  };
}
