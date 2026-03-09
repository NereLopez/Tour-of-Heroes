import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';
import { HEROES } from './mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
