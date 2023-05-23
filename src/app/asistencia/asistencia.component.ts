import { Component } from '@angular/core';

export interface ListaEstudiantes {
  codigo: number;
  nombre: string;
  apellido: string;
  facultad: string;
  proyecto: string;
  instrumento: string;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {

  Estudiantes: ListaEstudiantes[] = [
    {codigo: 1, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 2, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 3, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'}
  ];

}
