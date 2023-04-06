import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  titulo = 'Listado de empleados';
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  config:any;

  empleados: Empleado[] =[
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Maria", "Martin", "Presidente", 9500),
    new Empleado("Pedro", "Fernandes", "Presidente", 2500),
    new Empleado("Guillermo ", "Fernandes", "Presidente", 2500),
    new Empleado("Anibal", "Fernandes", "Presidente", 2500),
    new Empleado("Nissa", "Fernandes", "Presidente", 26500),
    new Empleado("Grekko", "Fernandes", "Presidente", 5500),
    new Empleado("Io", "Fernandes", "Presidente", 12500),
    new Empleado("Karen", "Fernandes", "Presidente", 7500),
    new Empleado("Valeria", "Fernandes", "Presidente", 8500)
  ];

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

  agregarEmpleado(){
    let newEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(newEmpleado);
  }
}
