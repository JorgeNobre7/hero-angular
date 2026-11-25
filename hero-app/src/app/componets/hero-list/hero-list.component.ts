import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  heroiDestaque: string = 'Homem de Ferro';
  universo: string = 'Marvel';

  estaDesabilitado: boolean = false;
  dicaTooltip: string = 'Clique para alterar o status do herói';

  ativo: boolean = true;

  alternarStatus(): void {
    this.ativo = !this.ativo;
  }

  equipe: string[] = ['Homem de Ferro', 'Batman', 'Tempestade', 'Asa Noturna', 'Mulher Maravilha'];

}
