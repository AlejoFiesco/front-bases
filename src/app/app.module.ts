import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

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
import { DeshabilitadoComponent } from './deshabilitado/deshabilitado.component';
import { DatosUsuarioComponent } from './datos-usuario/datos-usuario.component';
import { HttpClientModule } from '@angular/common/http';

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
    ElectivasComponent,
    DeshabilitadoComponent,
    DatosUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
