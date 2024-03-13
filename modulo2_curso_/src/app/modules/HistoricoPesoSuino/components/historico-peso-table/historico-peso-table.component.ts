import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PesoSuino } from '../../../../models/interfaces/Peso/PesoSuino';
import { EventActon } from '../../../../models/enum/suino-enum';
import { HistoricoEvent } from '../../../../models/enum/suino-enum';
@Component({
  selector: 'app-historico-peso-table',
  templateUrl: './historico-peso-table.component.html',
  styleUrl: './historico-peso-table.component.css'
})
export class HistoricoPesoTableComponent {
  @Input() Pesos: Array<PesoSuino> = [];
  @Output() historicoEvent =  new EventEmitter<EventActon>();
  @Output() deletsuinosEvent =  new EventEmitter<any>();
  public HistoricoSelected!: PesoSuino;

  public addPesoEvent = HistoricoEvent.ADD_PESO_EVENT;
  public editPesoEvent =HistoricoEvent.EDIT_PESO_EVENT;

  handleSuinoEvent(action: string, id?: string): void{
    if(action && action !== ''){
      const PesoEventData= id && id !== '' ? {action, id} : {action}
      console.log("PesoEventData", PesoEventData)
      // EMITIR O VALOR DO EVENTO
      this.historicoEvent.emit(PesoEventData)
    }
  }
  handleDeleteSuino(id: string, brincoSuino: string): void{
    if(id !== '' && brincoSuino !== ''){
      this.deletsuinosEvent.emit({id, brincoSuino});
    }
  }
}
