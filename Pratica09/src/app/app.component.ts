import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pratica09';
  name_title: string = "consultando a wiki api"

  constructor(private rotas:Router, private rotaAtiva: ActivatedRoute){
    
  }
}
