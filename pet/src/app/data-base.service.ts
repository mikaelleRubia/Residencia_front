import { Injectable } from '@angular/core';
import {Petshop} from './petshop.model';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs';
import { Firestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  
  loadedPetshop: Petshop[]=[]
  constructor(private http: HttpClient, private firestore: Firestore) { }

  ngOnInit(): void {

  }

  getPetshot(){
    return this.http.get< {[key:string]: Petshop}>('http://residenciaaula13-default-rtdb.firebaseio.com/posts.json',
    {
      
    }
  )
  .pipe(
    map( (responseData) => {
      const postArray:Petshop[] = [];
      console.log(">>>",responseData)
      for (const key in responseData) {
          if ((responseData).hasOwnProperty(key)){
            postArray.push({...(responseData as any)[key], id: key});
          }
      }
      return postArray;
    }
    ));
  }

  addPetShop(petshopData:{ nomeTutor: string,
                            nomeAnimal:string,
                            idade: number,
                            raca: string,
                            historico: string,
                            peso: number}){

  this.http.post(
    'https://residenciaaula13-default-rtdb.firebaseio.com/posts.json',
    petshopData)
    .subscribe(responseData => {
      console.log(">>",responseData);
    });
  }

}
