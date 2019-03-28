import { Component, OnInit } from '@angular/core';
import {Hero,states,Address} from '../../domain/data.model';
import {HeroService } from '../../service/hero.service';
import { Observable } from 'rxjs/internal/Observable';
import { filter,map } from 'rxjs/Operators';
import { MessageService } from '../../service/message.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isSelect:boolean=true;
  Heroes:Observable<Hero[]>;
  selHero:Hero;
  testHero:Hero[]=[];
  message:string[];
  // 明确把 heroForm 属性的类型声明为 FormGroup，稍后你会初始化它。

  constructor(private heroService:HeroService,public messageService:MessageService) { 
    this.message=this.messageService.message;
  }

  ngOnInit() {
  }
  //获取数据
  getHeroes(){
      this.Heroes=this.heroService.getHeroes().pipe();
  }
  getHero():void{
    this.heroService.getHeroes().subscribe(heroes=>this.testHero=heroes);
    this.messageService.add('HeroService: fetched heroes');
  }
  //selectHeroes
  selectHero(hero:Hero){
    this.selHero=hero;
    this.isSelect=false;
    console.log(this.selHero);
  }
  clears(){
    this.messageService.clear();
  }
   
}
