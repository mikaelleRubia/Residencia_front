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
      let { login, senha, email } = this.aviaoForm.value;
      console.log(login, senha, email);
    }
    console.log(this.aviaoForm);
    //this.aviaoForm?.reset();
  }
  
}
