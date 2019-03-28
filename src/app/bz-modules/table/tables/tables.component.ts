import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import {Car} from '../../../domain/cars.model';
import 
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  cars:Car[];

  constructor() { }

  ngOnInit() {
  }

}
