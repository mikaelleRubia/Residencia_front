import { Sessao } from './../../../../models/interfaces/Sessao/sessao';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-detalhes-sessao-table',
  templateUrl: './detalhes-sessao-table.component.html',
  styleUrl: './detalhes-sessao-table.component.css'
})
export class DetalhesSessaoTableComponent {
  @Input() Detalhes: Sessao[]=[]
  public atividades_sessao: string[] = ['Vacina Raiva', 'Rinite Atrófica'];
  public brinco_animais: string[]=[]

  public SessaoSelected!: Sessao;


  constructor(){}

  ngOnInit(): void {
    console.log("tabela",this.Detalhes)
  }



}
