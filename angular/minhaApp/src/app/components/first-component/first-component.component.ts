import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name:string = "ANA";
  dadosCarregados: any = "";
  erroAoCarregarDados: string = "";
  categoriaEscolhida: string = "";
  
  @ViewChild('content', { static: true })
  content!: ElementRef;


  @ViewChild('informacaos', { static: true })
  informacaos!: ElementRef;
  

  @ViewChild('Blocoinformacaos', { static: true })
  Blocoinformacaos!: ElementRef;

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  newElementP = document.createElement('p');


  selecionarCategoria(categoria: string) {

    this.categoriaEscolhida = categoria;
    if (!this.content.nativeElement.firstChild) {
      this.criarElementos(this.dadosCarregados);
    }if(this.dadosCarregados[this.categoriaEscolhida].length >=3){
      this.content.nativeElement.innerHTML = '';
      this.criarElementos(this.dadosCarregados);
     
    }
  }
  Addinformacoes(result: any): void {
    if (this.Blocoinformacaos && this.Blocoinformacaos.nativeElement) {
      this.newElementP = document.createElement('p');
      this.newElementP.innerHTML = `${result}<br>`;
  
      const newElementSpan = this.Blocoinformacaos.nativeElement.querySelector('span');
      if (newElementSpan) {
        if (!newElementSpan.innerHTML.includes(result)) {
          newElementSpan.appendChild(this.newElementP);
          this.styleNewInformacoes(newElementSpan);
        }
      } else {
        const newSpan = document.createElement('span');
        newSpan.appendChild(this.newElementP);
        this.Blocoinformacaos.nativeElement.appendChild(newSpan);
      }
    }
  }
  
  criarElementos(result: any): void {
    if (this.content && this.content.nativeElement) {
      const tamanhoLista = result[this.categoriaEscolhida].length;
      let clicado = 0;
      for (let i = 0; i < tamanhoLista; i++) {
        const newElement = document.createElement('button');
        this.renderer.setAttribute(newElement, 'id', `meuBotao`);
        newElement.innerHTML = `${result[this.categoriaEscolhida][i].Name} `;
        this.styleNewBotoes(newElement);
        this.content.nativeElement.appendChild(newElement);

        newElement.addEventListener('click', () => {
          clicado ++;
          if (clicado > 1) {
            const elementosP = this.Blocoinformacaos.nativeElement.querySelectorAll('span p') as NodeListOf<HTMLElement>;
            elementosP.forEach((elementoP: HTMLElement) => {
              elementoP.remove();
            });
          }
          this.criarElementosBotao(result[this.categoriaEscolhida][i], clicado);      
        });
      }
    } else {
      console.error('this.content.nativeElement é nulo ou indefinido.');
    }
  }


  criarElementosBotao(result: any, clicado: number): void {
    if (this.informacaos && this.informacaos.nativeElement) {
      if (clicado > 1) {
  
        const elementosAntigos = this.informacaos.nativeElement.querySelectorAll('.meuBotaoFilho') as NodeListOf<HTMLElement>;
        elementosAntigos.forEach((elementoAntigo: HTMLElement) => {
          this.informacaos.nativeElement.removeChild(elementoAntigo);
        });

      }
  
      for (const propriedade in result) {
        if (result.hasOwnProperty(propriedade)) {
          const newElementBotao = document.createElement('button');
          this.renderer.setAttribute(newElementBotao, 'id', `meuBotaoFilho_${propriedade}`);
          this.renderer.addClass(newElementBotao, 'meuBotaoFilho');
          newElementBotao.innerHTML = `${propriedade}`;
          this.styleNewBotoesFilhos(newElementBotao);
          this.informacaos.nativeElement.appendChild(newElementBotao);
          newElementBotao.addEventListener('click', () => {

            this.Addinformacoes(result[propriedade]);
          });
        }
      }
    } else {
      console.error('this.informacaos.nativeElement é nulo ou indefinido.');
    }
  }
  

  exibirMensagem(): Promise<any> {
    return this.http.get('assets/veiculos.json').toPromise()
      .then((veiculos) => {
        return veiculos;
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        throw new Error('Resposta de rede não foi bem-sucedida');
      });
  }

  ngOnInit() {

    this.exibirMensagem()
      .then((dados) => { 
        this.dadosCarregados = dados;
      })
      .catch((error) => {
        this.erroAoCarregarDados = error.message;
      }); 
  }

  styleNewInformacoes(newElement: any): void {
    newElement.style.backgroundColor = 'rgb(216, 100, 106)';
    newElement.style.padding = '130px';
    newElement.style.color = '#ffffff';
    newElement.style.marginTop = '20px';
    newElement.style.border = '2px solid #60335d';
    newElement.style.borderRadius = '5px';
    newElement.style.display = 'block'; 

}

  styleNewBotoes(newElement : any): void{
    newElement.style.backgroundColor = '#007bff';
    newElement.style.padding = '10px';
    newElement.style.color = '#ffffff';
    newElement.style.marginTop = '10px';
    newElement.style.border = '2px solid #60335d';
    newElement.style.borderRadius = '5px';
    newElement.style.display = 'block'; 
  }

  styleNewBotoesFilhos(newElement : any): void{
    newElement.style.backgroundColor = '#3CFAD8';
    newElement.style.padding = '10px';
    newElement.style.color = '#000000';
    newElement.style.marginTop = '10px';
    newElement.style.border = '2px solid #60335d';
    newElement.style.borderRadius = '5px';
    newElement.style.display = 'block'; 
  }

}
