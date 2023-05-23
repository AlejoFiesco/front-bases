import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { ViaticosComponent } from './viaticos/viaticos.component';
import { ElectivasComponent } from './electivas/electivas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    HeaderComponent,
    CalendarioComponent,
    SeleccionComponent,
    AsistenciaComponent,
    LiquidacionComponent,
    ViaticosComponent,
    ElectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
