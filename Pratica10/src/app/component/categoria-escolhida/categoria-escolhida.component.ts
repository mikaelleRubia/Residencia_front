import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria-escolhida',
  templateUrl: './categoria-escolhida.component.html',
  styleUrl: './categoria-escolhida.component.css'
})
export class CategoriaEscolhidaComponent {
  NomeObj:string = ''
  ObjectNome_: any = ''
  NomesCaracter:string []= []
  backgroundColor_ = "";
  padding_ = "";
  color_ = "";
  fontFamily_ = "";
  marginTop_ = "";
  border_ = "";
  borderRadius_ = "";
  display_ = "";
  textAlign_ = "";

  buscaPorNome(Nome: any){
    console.log('Nome'+ Nome)
    this.NomeObj = Nome;
    this.backgroundColor_ = "rgb(237, 134, 96)";
    this.padding_ = "10px 10px";
    this.color_ = "#ffffff";
    this.fontFamily_ = "NomeDaFonte";
    this.border_ = "2px solid #60335d";
    this.borderRadius_ = "5px";
    this.display_ = "block";
    this.marginTop_ = "50px";
    this.textAlign_ = "center";
  }
  buscaObjetoNome(ObjectNome: any){
    this.ObjectNome_ = ObjectNome

    const primeiroObjeto = this.ObjectNome_[0];
    this.NomesCaracter = Object.keys(primeiroObjeto);

  }

  buscaValor(valor: any){
    console.log("buscaValor"+ this.ObjectNome_[0][valor]);
  }

  
}