import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  @Output() CarateristicasEmpleado = new EventEmitter<string>();

  agregarCarateristicas(value: string) {
    this.CarateristicasEmpleado.emit(value);
  }
}
