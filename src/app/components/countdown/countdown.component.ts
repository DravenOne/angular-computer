import { Component, OnInit,OnDestroy } from '@angular/core';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  intervalId =0;
  message='';
  seconds=10;

  clearTimer(){ clearInterval(this.intervalId); }

  constructor() { }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy(){
    this.clearTimer(); 
  }
  start(){
    this.countDown();
  }
  stop(){
    this.clearTimer();
    this.message=`Holding at T-${this.seconds} seconds`;
  }
  private countDown(){
    this.clearTimer();
    this.intervalId=window.setInterval(()=>{
      this.seconds-=1;
      if(this.seconds===0){
        this.message='Blaset off!';
      }else{
        if(this.seconds<0){
          this.seconds=10;
        }
        this.message=`T-${this.seconds} seconds and counting`;
      }
    },1000)
  }

}
