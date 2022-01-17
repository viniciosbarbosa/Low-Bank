import { RouterModule } from '@angular/router';
import { ExtratoComponent } from './views/extrato/extrato.component';
import { NovaTransferenciaComponent } from './views/nova-transferencia/nova-transferencia.component';
import { Routes } from '@angular/router'
import { NgModule } from '@angular/core';


export const routes : Routes = [
  {path : "" , redirectTo:"extrato" , pathMatch:"full"},
  {path : "extrato" ,component:ExtratoComponent },
  {path : "nova-transferencia" ,component:NovaTransferenciaComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModuleLow{}
