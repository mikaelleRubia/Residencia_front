export enum SuinoEvent
{
  ADD_SUINO_EVENT = 'Adicionar Suino',
  EDIT_SUINO_EVENT = 'Editar Suino',
  HISTORIC_SUINO_EVENT = 'Historico de Peso'
}

export interface EventActon {
  action: string;
  id?: string;

}
