import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../service/logger.serivce';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  submitted = false;
  names:string;
  alterEgo:string;
  power:string='Really Smart';

  onSubmit(){
    this.submitted=true;
    console.log(this.names);
  }
  constructor(private loggerService:LoggerService) { }

  ngOnInit() {
  }
}
