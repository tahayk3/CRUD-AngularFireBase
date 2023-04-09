import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  accion:number;
  titulo = 'Listado de empleados';
  empleados: Empleado[] =[];
  cuadroId:number=0;
  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number=0;
  constructor(private router:Router, private route:ActivatedRoute, private empleadoService:EmpleadosService){}
  ngOnInit(): void {
    this.accion =parseInt( this.route.snapshot.queryParams['accion']);
    this.empleados = this.empleadoService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadoService.encontrarEmpleadoServicio(this.indice);
    this.cuadroId = empleado.id;
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  /*
  ModificarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroId,this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadoService.modificarEmpleadoServicio(this.indice, miEmpleado);
    this.router.navigate(['']);
  }

  EliminarEmpleado(){

    this.empleadoService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate(['']);
  }
  */
  ModificarEmpleado(){
    if(this.accion==1){
      let miEmpleado = new Empleado(this.cuadroId,this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadoService.modificarEmpleadoServicio(this.indice, miEmpleado);
      this.router.navigate(['']);
    }
    else
    {
      this.empleadoService.eliminarEmpleadoServicio(this.indice);
      this.router.navigate(['']);

    }
  }

}
