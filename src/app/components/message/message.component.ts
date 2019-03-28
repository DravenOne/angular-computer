import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { MessageService } from '../../service/message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Output() repeat = new EventEmitter<String>();


  constructor(public messageService:MessageService) { }
 // 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。
  // Angular 只会绑定到组件的公共属性。
  
  Getrepeat(message:string){
    let messages = message.split(':')[1].split('=')[0];
    console.log(messages);
    this.repeat.emit(messages);
  }
  ngOnInit() {
  }

}
