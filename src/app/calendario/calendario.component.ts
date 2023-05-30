import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {

  http = inject(HttpClient);

  terminarCalendario(){
    console.log("terminar calendario");
  }

  ngOnInit(){
    
  }
}
