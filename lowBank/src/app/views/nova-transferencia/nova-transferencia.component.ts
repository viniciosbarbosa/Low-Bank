import { OperacaoService } from './../../services/operacao.service';
import { operacoesAndamento } from './../../models/operacoesAndamento.model';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent  {

  @Output() acaoTransferencia = new EventEmitter<any>();

  nome:string;
  banco:number;
  agencia:number;
  conta :string;
  valor:number;

   constructor(){}

  transferencia(){
    console.log("Operação Bem sucedida");
  }


  limparTodosCampos(){
    this.nome = "";
    this.banco = 0;
    this.agencia = 0;
    this.conta = "";
    this.valor = 0;
  }
}

