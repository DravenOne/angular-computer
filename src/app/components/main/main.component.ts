import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { MessageService } from '../../service/message.service'; 
import { CountdownComponent } from '../countdown/countdown.component';
import {AdService} from '../banner/ad.service';
import { AdItem } from '../banner/ad-item';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:  [ AdService ],//第二种注入服务
})
export class MainComponent implements OnInit {
  data:string;
  value:string;
  names = ['Sam','sad','tomy'];
  major=1;
  minor=23;
  name:string;
  isActive:boolean=true;
  private timer;
  color:string;
  condition:false;
  ads:AdItem[];
  adService=new AdService();//第二种注入服务

  // @ViewChild(CountdownComponent)
  // private countdownComponent: CountdownComponent;
  // seconds() { return 0; }
  // ngAfterViewInit() {
  //   setTimeout(() => this.seconds = () => this.countdownComponent.seconds, 0);
  // }  
  constructor(private messageService:MessageService) { }
  newMinor() {
    this.minor++;
  }
  newMajor() {
    this.major++;
    this.minor = 0;
  }
  ngOnInit() {
    this.data='test';
    this.value='';
    this.ads = this.adService.getAds();
  }
  repeat(message:string){
    this.value=message;
    this.timer = setTimeout(()=>{
      this.value=String(this.Single(this.value));
    },1000)
    console.log(this.value);
  }
  Number(num:string){
      this.value+=num;
  }
  goback(){
    this.value.substring(0,this.value.length-1);
    this.value=this.value.substring(0,this.value.length-1);
  }
  delete(){
    this.value='';
  }
  Summing(){
    let messageData ="运算:"+ this.value+"="+this.Single(this.value);
    if(!this.Single(this.value)){
      this.value='';
      return false;
    }
    this.value=String(this.Single(this.value));
    this.messageService.add(messageData);
  }
  Single(value:string){
    let results =0;
    let arrays=[];
    if(value.indexOf('+')!=-1){
      value.split('+').forEach((item,index)=>{
        arrays.push(parseInt(item));
      })
      results=arrays[0]+arrays[1];
    }
    else if(value.indexOf('-')!=-1){
      value.split('-').forEach((item,index)=>{
         arrays.push(parseInt(item));
      })
      results=arrays[0]-arrays[1];
    }
    else if(value.indexOf('*')!=-1){
      value.split('*').forEach((item,index)=>{
         arrays.push(parseInt(item));
      })
      results=arrays[0]*arrays[1];
    }
    else if(value.indexOf('÷')!=-1){
      value.split('÷').forEach((item,index)=>{
         arrays.push(parseInt(item));
      })
      results=arrays[0]/arrays[1];
    }
    return results;
  }
  ngOnDestroy(){
    if(this.timer){
      clearTimeout(this.timer);
    }
  }
}
