import { Component, OnInit,Input,OnChanges, SimpleChange } from '@angular/core';
import { NgAnalyzedFile } from '@angular/compiler';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  newdate=new Date();
  toggle = true;
  changeLog:string[]=[];
  test='模板变量';
  private num = 0;
  
  @Input() names:string;

  constructor() { }

  ngOnInit() {
  }
  get format(){
    return this.toggle? "shortDate":'fullDate';
  }
  toggleFormat(){
    this.toggle=!this.toggle;
  }
  ngOnChanges(changes:SimpleChange){
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(this.changeLog);
    }
  }
  changeElement(): void {
    if (this.num > 3) {
      this.num = 0;
    }
    this.num++;
  }
}
