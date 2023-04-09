import { Empleado } from "./empleado.model";
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService{
  constructor(private servicioVentanEmergente: ServicioEmpleadosService){

  }
    empleados: Empleado[] =[
        new Empleado(0,"Juan", "Diaz", "Presidente", 7500),
        new Empleado(1, "Maria", "Martin", "Presidente", 9500),
        new Empleado(2, "Pedro", "Fernandes", "Presidente", 2500),
        new Empleado(3, "Guillermo ", "Fernandes", "Presidente", 2500),
        new Empleado(4, "Anibal", "Fernandes", "Presidente", 2500),
        new Empleado(5, "Nissa", "Fernandes", "Presidente", 26500),
        new Empleado(6, "Grekko", "Fernandes", "Presidente", 5500),
        new Empleado(7, "Io", "Fernandes", "Presidente", 12500),
        new Empleado(8, "Karen", "Fernandes", "Presidente", 7500),
        new Empleado(9, "Valeria", "Fernandes", "Presidente", 8500),
        new Empleado(10, "Vale", "Villagran", "Presidente", 8500)
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanEmergente.muestraMensaje(
          "Persona agregada con exito" + '\n'+
          empleado.nombre + '\n'+
          empleado.apellido + '\n');
        this.empleados.push(empleado);
      }
      encontrarEmpleadoServicio(indice:number){
        let empleado:Empleado = this.empleados[indice];
        return empleado;
      }
      modificarEmpleadoServicio(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
      }
      eliminarEmpleadoServicio(indice:number){
        this.empleados.splice(indice,1);
      }
}