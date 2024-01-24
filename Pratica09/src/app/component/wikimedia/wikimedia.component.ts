import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { WikipediaService } from '../../wikipedia.service';

@Component({
  selector: 'app-wikimedia',
  templateUrl: './wikimedia.component.html',
  styleUrls: ['./wikimedia.component.css'],
})
export class WikimediaComponent {
  @Input() title_project: string = "";
  title: string = '';
  extract: string = '';
  valueSearch: string = '';
  listSearch: string[] = [];
  today = new Date();

  @ViewChild('informacaos', { static: true })
  informacaos!: ElementRef;

  constructor(private wikipediaService: WikipediaService) {}

  onsendPages(valor: any) {
    this.valueSearch = valor;
    this.listSearch = [];
    this.extract = '';
    this.title = '';

    this.wikipediaService.searchPages(valor).subscribe(
      (dados: any) => {
        const pages = dados[3][0];

        if (pages.length > 0) {
          for (let i = 0; i < dados[3].length; i++) {
            this.listSearch.push(dados[1][i]);
          }
        } else {
          this.listSearch = []
        }

        // console.log('Extract:', this.listSearch);
        this.criarElementosBotao(valor, this.listSearch);
      },
      (error) => {
        console.error('Erro ao carregar dados:', error);
        throw new Error('Resposta de rede não foi bem-sucedida');
      }
    );
  }

  criarElementosBotao(valueSearch: any, returnSearch: string[]): void {
    const newElementTop = document.createElement('h2');
    
    if (this.informacaos.nativeElement.firstChild) {
      this.informacaos.nativeElement.innerHTML = '';
    } 
    if (returnSearch.length == 0 || returnSearch == null || returnSearch == undefined) {
      newElementTop.innerHTML = ` Não encontrei nada em minha busca com esse o valor "${valueSearch}" `;
    } else {
      newElementTop.innerHTML = ` Resultado para busca: "${valueSearch}" `;
      this.informacaos.nativeElement.appendChild(newElementTop);
  
      returnSearch.forEach((result) => {
        const listItem = document.createElement('h2');
        listItem.innerHTML = result;
        listItem.style.cursor = 'pointer';
        listItem.style.color = "blue";
        

        this.wikipediaService.searchPage(result).subscribe(
          (dado: any) => {
            const pages  = (dado as any)['query']['pages']
            
            Object.keys(pages).forEach((pageId) => {
              const page = pages[pageId];
              const texto = page.extract;
             
              const posicaoPonto = texto.indexOf('.');
              this.extract = texto.substring(0, posicaoPonto + 1);
              this.informacaos.nativeElement.appendChild(listItem);
              const newElementResp = document.createElement('p');
              newElementResp.innerHTML = this.extract;
              newElementResp.style.fontStyle = "italic";
    
              this.informacaos.nativeElement.appendChild(newElementResp);
                
            });
          },
          (error) => {
            console.error('Erro ao carregar dados:', error);
            throw new Error('Resposta de rede não foi bem-sucedida');
          }
        );
  
      });
    }
  }
  
}
