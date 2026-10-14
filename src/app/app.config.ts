import { ApplicationConfig, Component, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { POKE_API_URL } from './pokemon/data/pokemon.service';
import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: "pokemon",
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    // lazy loading
    loadComponent: () => import('./pokemon/Listagem/lpokemon').then((Component) => Component.LPokemon),
  },
  {
    path: 'pokemon/:name',
    loadComponent: () => import('./pokemon/detalhes/detalhes-pokemon').then((Component) => Component.DetalhesPokemon),
  }
];


export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: POKE_API_URL,
      useValue: 'https://pokeapi.co/api/v2/pokemon/'
    }
  ],
};
