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

  GenerarLinkCalendario(actividad: boolean){
    return actividad ? '/deshabilitado' : '/calendario';
  }

  GenerarLinkSeleccion(periodo: boolean){
    if(periodo){
      return '/deshabilitado'
    }
    return '/seleccion'
  }

  GenerarLinkAsistencia(fecha1: string, fecha2: string[]){
    return fecha2.includes(fecha1) ? '/asistencia' : '/deshabilitado';
  }

  GenerarLinkLiquidacion(fecha1: string, fecha2: string[]){
    for(let i = 0; i < fecha2.length; i++){
      if(fecha1==fecha2[i]){
        return '/deshabilitado'
          break;
      }
    }
    return '/liquidacion'
  }

  ngOnInit(): void {
    const actividad=false;
    const periodo=false;
    const fecha1='10/11/2023';
    const fecha2 = ['10/05/2021', '11/05/2021', '12/05/2021'];
    this.link_Actividad=this.GenerarLinkCalendario(actividad);
    this.link_Seleccion=this.GenerarLinkSeleccion(periodo);
    this.link_Asistencia=this.GenerarLinkAsistencia(fecha1, fecha2);
    this.link_Liquidacion=this.GenerarLinkLiquidacion(fecha1, fecha2);
  }

}
