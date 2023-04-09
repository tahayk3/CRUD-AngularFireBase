import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit  {
  cuadroId:number=0;
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  empleados: Empleado[] =[];

  constructor(private router:Router, private empleadoService:EmpleadosService){}
  ngOnInit(): void {
    this.empleados = this.empleadoService.empleados;
  }
  volverHome(){
    this.router.navigate(['']);
  }

  agregarEmpleado(){
    let newEmpleado = new Empleado(this.cuadroId,this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpleadoServicio(newEmpleado);
    this.router.navigate(['']);
  }
}
