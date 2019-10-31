import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //state das telas (Ação de Compra)
  escolhaSeuPacoteState = true;
  detalhesState = false;
  seusDadosState = false;


  constructor() { }

  ngOnInit() {

  }

  //funções de abertura de telas

  openEscolhaSeuPacote(){
    if (this.escolhaSeuPacoteState) {
      return true;
    } else {
      return false;
    }
  }

  openDetalhes(){
    if (this.detalhesState) {
      return true;
    } else {
      return false;
    }
  }

  openSeusDados(){
    if (this.seusDadosState) {
      return true;
    } else {
      return false;
    }
  }

  //função de escolha de Card

  btnEscolhaCard(card){
    console.log(card);
    this.escolhaSeuPacoteState = false;
    this.detalhesState = true;
  }

}
