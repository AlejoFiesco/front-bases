import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { DeshabilitadoComponent } from './deshabilitado/deshabilitado.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calendario', component: CalendarioComponent},
  {path: 'seleccion', component: SeleccionComponent},
  {path: 'asistencia', component: AsistenciaComponent},
  {path: 'liquidacion', component: LiquidacionComponent},
  {path: 'deshabilitado', component: DeshabilitadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
