import { AppRoutingModuleLow } from './app.routing.modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExtratoComponent } from './views/extrato/extrato.component';
import { NovaTransferenciaComponent } from './views/nova-transferencia/nova-transferencia.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ExtratoComponent,
    NovaTransferenciaComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleLow
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
