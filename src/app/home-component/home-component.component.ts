import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de empleados';
  empleados: Empleado[] =[];
  cuadroId:number=0;
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  constructor(private empleadoService:EmpleadosService){}
  ngOnInit(): void {
    //this.empleados = this.empleadoService.empleados;
    this.empleadoService.obtenerEmpleados().subscribe(misEmpleados =>{
      console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadoService.setEmpleados(this.empleados);
    });
  }
  agregarEmpleado(){
    let newEmpleado = new Empleado(this.cuadroId,this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.agregarEmpleadoServicio(newEmpleado);
  }
}
