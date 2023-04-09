import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}
    cargarEmpleados(){
        return this.httpClient.get('https://mis-clientes-584cb-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.put('https://mis-clientes-584cb-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response=>console.log("Se han guardado los empleados: " + response),
            error=> console.log("Error: " + error),
        ); 
    }

    actualizarEmpleados(indice: number, empleado: Empleado){
        let url= 'https://mis-clientes-584cb-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        this.httpClient.put(url, empleado).subscribe(
            response=>console.log("Se ha modificado el empleado: " + response),
            error=> console.log("Error: " + error),
        ); 
    }

    eliminarEmpleados(indice: number){
        let url= 'https://mis-clientes-584cb-default-rtdb.firebaseio.com/datos/'+ indice + '.json';
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha eliminado el empleado: " + response),
            error=> console.log("Error: " + error),
        ); 
    }
}