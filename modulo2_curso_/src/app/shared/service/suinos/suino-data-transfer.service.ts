import { Injectable } from '@angular/core';
import { BehaviorSubject, take,map } from 'rxjs';
import{ Suino} from '../../../models/interfaces/Suino/Suino';


@Injectable({
  providedIn: 'root'
})
export class SuinoDataTransferService {
  public suinoDataEmitter$ = new BehaviorSubject<Suino[] | null>(null);
  public suinosDatas: Suino[]=[]

  constructor() { }

  setSuinosDatas(suinos: Suino[]): void{
    if(suinos){
      this.suinoDataEmitter$.next(suinos);
      this.getSuinosDatas()
    }
  }
  getSuinosDatas() {
    this.suinoDataEmitter$
      .pipe(
        take(1),
        map((responseData) => responseData?.filter((suino) => suino.brinco > 0))
      )
      .subscribe({
        next: (response) => {
          if (response) {
            this.suinosDatas = response;
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
      return this.suinosDatas
  }
}
