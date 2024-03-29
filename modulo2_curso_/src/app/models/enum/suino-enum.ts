import { PesoSuino } from "../interfaces/Peso/PesoSuino";
import { Suino } from "../interfaces/Suino/Suino";

export enum SuinoEvent
{
  ADD_SUINO_EVENT = 'Adicionar Suino',
  EDIT_SUINO_EVENT = 'Editar Suino',
  HISTORIC_SUINO_EVENT = 'Historico de Peso'
}


export enum HistoricoEvent
{
  ADD_PESO_EVENT = 'Adicionar Peso',
  EDIT_PESO_EVENT = 'Editar Peso',

}

export interface EventActon {
  action: string;
  id?: string;

}

export interface EventActionPeso extends Array<[SuinoSelec: Suino]> {}


export interface EventActionPeso_ {
  action: string;
  suino_id: string;

}
