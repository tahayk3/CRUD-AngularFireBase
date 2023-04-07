import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../empleado.model';
import { Collection } from 'ngx-pagination';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{
  @Input() empleadoLista: any;
  config: any;

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 0
    };
  }

  pageChange(event: any){
    this.config.currentPage = event;
  }

}
