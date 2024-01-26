import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-arquivos-json',
  templateUrl: './arquivos-json.component.html',
  styleUrls: ['./arquivos-json.component.css']
})
export class ArquivosJsonComponent {
  @Output() sendValue: EventEmitter<any> = new EventEmitter();
  @ViewChild('buscaInput') buscaInput!: ElementRef;

  dadosCarregados: any = "";

  constructor(private http: HttpClient) {}

  handleClick() {
    const valorDoInput = this.buscaInput.nativeElement.value;

    this.http.get('assets/veiculos.json').subscribe(
      (dados) => {
        console.log(dados);
        this.dadosCarregados = dados;
        console.log(">" + this.dadosCarregados);
        this.sendValue.emit(this.dadosCarregados);
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
        throw new Error('Resposta de rede não foi bem-sucedida');
      }
    );
  }
}
