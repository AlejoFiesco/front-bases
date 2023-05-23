import { Component} from '@angular/core';

export interface ListaEstudiantes {
  codigo: number;
  nombre: string;
  apellido: string;
  facultad: string;
  proyecto: string;
  instrumento: string;
}

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})

export class SeleccionComponent {

  Estudiantes: ListaEstudiantes[] = [
    {codigo: 1, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 2, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'},
    {codigo: 3, nombre: 'Jose', apellido: 'Perez', facultad: 'Ingenieria', proyecto: 'Electrica', instrumento: 'Guitarra'}
  ];

}
