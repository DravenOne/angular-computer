import { Component, OnInit,Input,Output,OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private _name = '';
  changeLog:string[]=[];
  @Input() major:number;
  @Input() minor:number;

  @Input()
  set name(name:string){
    this._name = (name&&name.trim())||'<no name set>';
  }
  get name():string{
    return this._name;
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log:string[]=[];
    for(let propName in changes){
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      // console.log(changedProp);
      if (changedProp.firstChange) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
  ngOnInit(){}
}
