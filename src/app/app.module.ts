import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AboutComponent } from './page/about/about.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { EntradaRecepcionComponent } from './page/entrada-recepcion/entrada-recepcion.component';
import { SalidaRecepcionComponent } from './page/salida-recepcion/salida-recepcion.component';
import { PisosComponent } from './page/pisos/pisos.component';
import { AperturaCajaComponent } from './page/apertura-caja/apertura-caja.component';
import { CierreCajaComponent } from './page/cierre-caja/cierre-caja.component';
import { ConfiguracionesComponent } from './page/configuraciones/configuraciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutComponent,
    SidebarComponent,
    EntradaRecepcionComponent,
    SalidaRecepcionComponent,
    PisosComponent,
    AperturaCajaComponent,
    CierreCajaComponent,
    ConfiguracionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
