import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Suino } from '../../../../models/interfaces/Suino/Suino';
import { SuinoEvent } from '../../../../models/enum/suino-enum';
import {EventActon} from '../../../../models/enum/suino-enum'
import { PesoSuino } from '../../../../models/interfaces/Peso/PesoSuino';
@Component({
  selector: 'app-suino-table',
  templateUrl: './suino-table.component.html',
  styleUrl: './suino-table.component.css'
})
export class SuinoTableComponent {
  @Input() suinos: Array<Suino> = [];
  @Input() pesos: Array<PesoSuino> = [];
  @Output() suinosEvent =  new EventEmitter<EventActon>();
  @Output() deletsuinosEvent =  new EventEmitter<any>();
  @Output() EventActionPeso =  new EventEmitter<any>();
  public suinoSelected!: Suino;
  public addSuinoEvent = SuinoEvent.ADD_SUINO_EVENT;
  public editSuinoEvent = SuinoEvent.EDIT_SUINO_EVENT;
  public historicSuinoEvent = SuinoEvent.HISTORIC_SUINO_EVENT;


  handleSuinoEvent(action: string, id?: string): void{
    if(action && action !== ''){
      const suinoEventData= id && id !== '' ? {action, id} : {action}
      console.log("suinoEventData", suinoEventData)
      // EMITIR O VALOR DO EVENTO
      this.suinosEvent.emit(suinoEventData)
    }
  }
  handlePesoEvent(action: string, suinoSelec: Suino): void{
    if(suinoSelec && suinoSelec !== null){
      const pesoEventData= suinoSelec && suinoSelec !== null ? {action, suinoSelec} : {action}
      console.log("suinoEventDataPeso", pesoEventData)
      // EMITIR O VALOR DO EVENTO
      this.EventActionPeso.emit(pesoEventData)
    }
  }
  handleDeleteSuino(id: string, brincoSuino: string): void{
    if(id !== '' && brincoSuino !== ''){
      this.deletsuinosEvent.emit({id, brincoSuino});
    }
  }
}
