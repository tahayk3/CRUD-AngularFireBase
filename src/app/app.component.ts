import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados: Empleado[] =[
    new Empleado("Juan", "Diaz", "Presidente", 7500),
    new Empleado("Maria", "Martin", "Presidente", 9500),
    new Empleado("Pedro", "Fernandes", "Presidente", 2500)
  ];
}
