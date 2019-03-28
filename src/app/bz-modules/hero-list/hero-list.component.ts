import { Component, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { finalize,filter,map } from 'rxjs/operators';

import { Hero} from '../../domain/data.model';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes:Observable<Hero[]>;
  nums:number[]=[];
  isLoading=false;
  selectedHero:Hero;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
  //   const squareOdd = of(1,2,3,4,5).pipe(
  //     filter(n=>n%2!==0),
  //     map(n=>n*n)
  //   );
  // squareOdd.subscribe(x=>this.nums.push(x));
  // console.log(this.nums);
  }
  getHeroes(){
    this.isLoading=true;
    this.heroes = this.heroService.getHeroes().pipe(finalize(()=>this.isLoading=false));
    this.selectedHero=undefined;
  }
  select(hero:Hero){
    this.selectedHero=hero;
  }
}
