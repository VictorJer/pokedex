import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { LPokemon } from './pokemon/Listagem/lpokemon';

@Component({
  imports: [Navbar, LPokemon],
  selector: 'app-root',

  templateUrl: './app.html',
})
export class App {
}
