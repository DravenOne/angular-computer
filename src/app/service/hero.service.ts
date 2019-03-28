import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Hero,heroes } from '../domain/data.model';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

    delayMs =500;

  // Fake server get; assume nothing can go wrong
  getHeroes():Observable<Hero[]>{
    return of(heroes).pipe(delay(this.delayMs));
  }

  updateHero(hero:Hero):Observable<Hero>{
    const oldHero = heroes.find(h=>h.id===hero.id);
    const newHero = Object.assign(oldHero,hero);
    return of(newHero).pipe(delay(this.delayMs));
  }
  constructor() { }
}
