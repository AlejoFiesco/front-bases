import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  link_Actividad!: String;
  link_Seleccion!: String;
  link_Asistencia!: String;
  link_Liquidacion!: String;

  ngOnInit(): void {
    const actividad = false;
    const periodo = false;
    const fecha1 = '10/11/2023';
    const fecha2 = ['10/05/2021', '11/05/2021', '12/05/2021'];
    this.link_Actividad = actividad ? '/deshabilitado' : '/calendario';
    this.link_Seleccion = periodo ? '/deshabilitado' : '/seleccion';
    this.link_Asistencia = fecha2.includes(fecha1) ? '/asistencia' : '/deshabilitado';
    this.link_Liquidacion = fecha2.includes(fecha1) ? '/deshabilitado' : '/liquidacion';
  }

}
