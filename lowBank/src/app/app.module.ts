import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModuleLow } from './app.routing.modules';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExtratoComponent } from './views/extrato/extrato.component';
import { NovaTransferenciaComponent } from './views/nova-transferencia/nova-transferencia.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModuleLow,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:"pt"},
    {provide: DEFAULT_CURRENCY_CODE, useValue:"BRL"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
