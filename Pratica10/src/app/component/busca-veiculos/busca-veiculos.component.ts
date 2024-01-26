import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-busca-veiculos',
  templateUrl: './busca-veiculos.component.html',
  styleUrls: ['./busca-veiculos.component.css'] 
})
export class BuscaVeiculosComponent {
  @Output() sendCategoria: EventEmitter<any> = new EventEmitter();
  @ViewChild('buscaCategoria') buscaCategoria!: ElementRef;
  listaBuscaVeiculos: any = "";
  categorias: any = "";
  titutoTop = "";
  style_: String = "";
  categoriaSelecionado: String = "";
  backgroundColor_ = "";
  padding_ = ""
  color_ = ""
  fontFamily_ = ""
  marginTop_ = ""
  border_ = ""
  borderRadius_ = ""
  display_ = " "
  resultadoBusca: any = "";
  textAlign_ ="";

  buscarVeiculos(result: any) {
    this.resultadoBusca = result;

    this.listaBuscaVeiculos = result;
    this.categorias = Object.keys(result);
    this.titutoTop = "Categoria";
    this.backgroundColor_=  "rgb(237, 134, 96)";
    this.padding_ = "10px 12px"
    this.color_ = "#ffffff"
    this.fontFamily_ = "NomeDaFonte"
    this.border_ = "2px solid #60335d"
    this.borderRadius_ = "5px"
    this.display_ = "block"
    this.marginTop_ = "0"; 
    this.textAlign_ = "center";
    // console.log(">"+result.Carros[0].Name)
    return result;
  }

  handleCategoriaClick(categoria: string) {
   
    console.log("Categoria clicada:", categoria);
    // Adicione mais lógica conforme necessário
    this.sendCategoria.emit(this.resultadoBusca.categoria);
}
 
}
