import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {
  @ViewChild('formulario') aviaoForm: NgForm | undefined;

  onSubmit(){
    if(this.aviaoForm){
      let { nome, senha, email, nome_completo, telefone, endereco, data_nascimento, genero, profissao } = this.aviaoForm.value;
      console.log(nome, senha, email, nome_completo, telefone, endereco, data_nascimento, genero, profissao);
      
      const dataNascimento = new Date(data_nascimento);
      const hoje = new Date();
      const diferencaAnos = hoje.getFullYear() - dataNascimento.getFullYear();
  
      if (diferencaAnos < 18) {
        console.log('Usuário deve ter no mínimo 18 anos.');
        return;
    }

    }

    console.log(this.aviaoForm);
    //this.aviaoForm?.reset();
  }
  
}
