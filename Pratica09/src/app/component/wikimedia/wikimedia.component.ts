import { Component , ElementRef, ViewChild, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-wikimedia',
  templateUrl: './wikimedia.component.html',
  styleUrl: './wikimedia.component.css'
})
export class WikimediaComponent {

  @Input() title_project:string= ""
  title:string = '';
  extract:string = '';
  valueSearch:string = '';
  today =  new Date();



  @ViewChild('informacaos', { static: true })
  informacaos!: ElementRef;

  constructor(private http: HttpClient) {}

  onsendPages(valor: any) {
    // console.log('Deu certo:', valor);
    this.valueSearch = valor;
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles='+valor;
    const fullUrl = corsAnywhereUrl + apiUrl;


    return this.http.get(fullUrl)
      .toPromise()
      .then((dados) => {
       const pages  = (dados as any)['query']['pages']
        console.log(dados);
        Object.keys(pages).forEach((pageId) => {
          const page = pages[pageId];
          this.extract = page.extract;
          this.title = page.title;
 
        });

        console.log('Extract:', this.extract);
        this.criarElementosBotao(valor, this.extract);

       return dados
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        throw new Error('Resposta de rede não foi bem-sucedida');
      });
  }

  criarElementosBotao(valueSearch: any, returnSearch: string): void {
    const newElementTop = document.createElement('h2');
    const newElementSpan = document.createElement('span');

    if(this.informacaos.nativeElement.firstChild){
      this.informacaos.nativeElement.innerHTML = '';

    }
    if(returnSearch == '' || returnSearch == null ||  returnSearch == undefined){
      newElementTop.innerHTML = ` Não encontrei nada em minha busca com essa o valor "${valueSearch}" `;
      newElementSpan.innerHTML = ` `;
    }else{
        newElementTop.innerHTML = ` Resultado para busca: "${valueSearch}" `;
        newElementSpan.innerHTML = ` ${returnSearch} `;
    }

    this.informacaos.nativeElement.appendChild(newElementTop);
    this.informacaos.nativeElement.appendChild(newElementSpan);
  }
}
