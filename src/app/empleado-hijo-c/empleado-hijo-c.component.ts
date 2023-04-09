import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../empleado.model';
import { Collection } from 'ngx-pagination';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit{
  @Input() empleadoLista: any;
  config: any;

  constructor(private miServicio:ServicioEmpleadosService){}

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 5,
      currentPage: 0,
    };
  }

  pageChange(event: any){
    this.config.currentPage = event;
  }


  arrayCaracteristicas = [''];
  agregarCarateristicas(newItem: string){
    this.arrayCaracteristicas.push(newItem);
  }

}
