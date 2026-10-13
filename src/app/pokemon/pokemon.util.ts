import { PokemonTypeViewModel } from "./pokemon.model";


export const DEFOULT_TYPE_COLOR = '#6C757D';

export const TYPE_COLORS: Readonly<Record<string, string>> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export function obterCorBackgrond(tipo: PokemonTypeViewModel[]): string{
  const primeiraCor = tipo[0]?.color ?? DEFOULT_TYPE_COLOR;
  const seguntaCor = tipo[1]?.color ?? primeiraCor;

  return `linear-gradient(#182033, #182033) padding-box, linear-gradient(135deg, ${primeiraCor} 0% 50%, ${seguntaCor} 50% 100%) border-box`
}

export function corDoTipo(type: string): string{
  return TYPE_COLORS[type] ?? DEFOULT_TYPE_COLOR;
}

export function paraTitleCase(texto: string): string {
  return texto.toLocaleLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
}
