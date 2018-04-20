import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {TipoIMC} from './imc.model';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html'
})
export class IMCComponent implements OnInit, OnChanges {

  @Input() peso: number;
  @Input() altura: number;
  
  imc: number;
  tipo: TipoIMC;

  ngOnInit()
  {
    console.log("init IMC");
    this.informar();
  }

  static calcularIMC (imc: number): TipoIMC 
  {
    let valortipo : TipoIMC;
    if (imc < 16) { valortipo = TipoIMC.desnutrido }
    else if (imc < 18) { valortipo = TipoIMC.delgado }
    else if (imc < 25) { valortipo = TipoIMC.normal }
    else if (imc < 31) { valortipo = TipoIMC.sobrepeso }
    else { valortipo = TipoIMC.obeso }  
    return valortipo;
  }

  ngOnChanges (changes: SimpleChanges)
  {
    console.log("changes IMC");
    this.informar();
    let imc_n = this.calculoIMC();
    this.tipo = IMCComponent.calcularIMC(imc_n);
    if(changes.peso){
      console.log("Peso modificado de", changes.peso.previousValue, "a", changes.peso.currentValue);
    }
  }

  informar () 
  {
    console.log("PESO " + this.peso);
    console.log("ALTURA " + this.altura);
  }

  calculoIMC () : number
  {
    this.imc = this.peso / (this.altura * this.altura);
    console.log("IMC",this.imc); 
    console.log(this.tipo);
    return this.imc;
  }


}
