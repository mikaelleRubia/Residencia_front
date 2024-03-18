import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sessao } from '../../../../models/interfaces/Sessao/sessao';
import { SessaoEvent } from '../../../../models/enum/suino-enum';

@Component({
  selector: 'app-sessao-table',
  templateUrl: './sessao-table.component.html',
  styleUrl: './sessao-table.component.css'
})
export class SessaoTableComponent {
  @Input()  Sessao_: Array<Sessao> = []
 public SessaoSelected!: Sessao;


  @Output() sessaoEvent =  new EventEmitter<any>();
  @Output() deleteSessao =  new EventEmitter<any>();

  public addSessaovent = SessaoEvent.ADD_SESSAO_EVENT;
  public editSessaovent =SessaoEvent.EDIT_SESSAO_EVENT;

  handleSessaoEvent(action: string, id?: string) {
    if(id && id !== ' '){
      const pesoEventData= id && id !== '' ? {action, id} : {action}
      console.log("suinoEventDataSessao", pesoEventData)

      this.sessaoEvent.emit(pesoEventData)
    }  }
  handleDeleteSessao(id: string):void {
    if(id !== '' ){
      this.deleteSessao.emit({id});
    }  }

}
