import { Component } from '@angular/core';

interface ItemNavbar {
  titulo: string;
  url: string;
}

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly itensNavbar: ItemNavbar[] = [{ titulo: 'Inicio', url: '#' }];
}
