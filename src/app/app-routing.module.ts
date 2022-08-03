import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { AperturaCajaComponent } from './page/apertura-caja/apertura-caja.component';
import { CierreCajaComponent } from './page/cierre-caja/cierre-caja.component';
import { ConfiguracionesComponent } from './page/configuraciones/configuraciones.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { EntradaRecepcionComponent } from './page/entrada-recepcion/entrada-recepcion.component';
import { PisosComponent } from './page/pisos/pisos.component';
import { SalidaRecepcionComponent } from './page/salida-recepcion/salida-recepcion.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'about', component: AboutComponent},
  { path: 'entrada-recepcion', component: EntradaRecepcionComponent},
  { path: 'salida-recepcion', component: SalidaRecepcionComponent},
  { path: 'pisos', component: PisosComponent},
  { path: 'apertura-caja', component: AperturaCajaComponent},
  { path: 'cierre-caja', component: CierreCajaComponent},
  { path: 'configuraciones', component: ConfiguracionesComponent},
  //{ path: 'dashboard', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { useHash: boolean=true; }
