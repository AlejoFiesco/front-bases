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
  selector: 'app-electivas',
  templateUrl: './electivas.component.html',
  styleUrls: ['./electivas.component.css']
})
export class ElectivasComponent {

  Estudiantes: ListaEstudiantes[] = [
    {codigo: 1, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 2, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 3, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'}
  ];

}
