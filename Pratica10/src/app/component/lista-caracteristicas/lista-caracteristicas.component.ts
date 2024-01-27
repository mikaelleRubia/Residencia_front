import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-caracteristicas',
  templateUrl: './lista-caracteristicas.component.html',
  styleUrl: './lista-caracteristicas.component.css'
})
export class ListaCaracteristicasComponent {

  listaCaracter(lista: any){
      for(let i = 0; i <lista.length; i++){
    console.log("this.NomesCaracterSelecionado --->"+lista[i]);
    
    }
  }

}
