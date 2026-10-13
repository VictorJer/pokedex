export interface PokemonTypeViewModel {
  readonly name: string;
  readonly displayName: string;
  readonly color: string;
}
export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string | null;
}
