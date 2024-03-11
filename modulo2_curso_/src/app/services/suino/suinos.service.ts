import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map} from 'rxjs';
import { Suino } from '../../models/interfaces/Suino/Suino';
import { PesoSuino } from '../../models/interfaces/Peso/PesoSuino';

@Injectable({
  providedIn: 'root'
})
export class SuinosService {
  private API_URL = environment.fireDatabase;
  private JWT_TOKEN = this.cookieService.get('USER_INFO')
  loadedPetshop: Suino[]=[]

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  getAllSuinos(): Observable<Suino[]> {
    const JWT_TOKEN = this.cookieService.get('USER_INFO');
    // this.addSuino(this.suinoData)
    return this.http.get<Suino[]>(this.API_URL+ '.json', {
      headers: { 'Authorization': `Bearer ${JWT_TOKEN}` }
    }).pipe(
      map((responseData) => {
        const postArray: Suino[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)){
            postArray.push({ ...(responseData as any)[key], id: key });
          }
        }
        return postArray;
      })
    );
  }


  deleteSuino(suinoId: string):Observable<any>{
    return this.http.delete(this.API_URL+`/${suinoId}.json`);
  }

  addSuino(suinoData: {
            brinco: number;
            brincoPai: number;
            brincoMae: number;
            dataNascimento: string;
            dataSaida: string;
            status: string;
            sexo: string;
            historicoPeso: PesoSuino[];
  }): Observable<any> {
    return this.http.post(this.API_URL+ '.json', suinoData);
  }

  editSuino(suinoData: {
              brinco: number;
              brincoPai: number;
              brincoMae: number;
              dataNascimento: string;
              dataSaida: string;
              status: string;
              sexo: string;
          }): Observable<any> {
    return this.http.put(this.API_URL+`.json`, suinoData)
  }
}
