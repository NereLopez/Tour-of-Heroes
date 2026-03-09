import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'Windstorm' };

  constructor() { }

  ngOnInit() {
  }

}
