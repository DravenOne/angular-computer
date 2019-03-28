import { Component, OnInit, Input,OnChanges,SimpleChange,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @Input() numbers:number;
  @Output() Number = new EventEmitter<string>();
  @Output() Summing = new EventEmitter<string>();
  @Output() goback = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();


  @Input()

  getNumber(num:string){
    this.Number.emit(num);
  }
  getSumming(){
    this.Summing.emit();
  }
  getBack(){
    this.goback.emit();
  }
  getDelete(){
    this.delete.emit();
  }
  ngOnInit() {
    console.log(this.numbers);
  }
}
