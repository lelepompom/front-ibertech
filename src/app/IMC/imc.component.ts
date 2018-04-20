import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'imc-persona',
  templateUrl: './imc.component.html'
})
export class IMCComponent implements OnInit, OnChanges {

  @Input() peso: number;
  @Input() altura: number;
  
  imc: number;

  ngOnInit()
  {
    console.log("init IMC");
    this.informar();
  }

  ngOnChanges (changes: SimpleChanges)
  {
    console.log("changes IMC");
    this.informar();
    this.calculoIMC();
    if(changes.peso){
      console.log("Peso modificado de", changes.peso.previousValue, "a", changes.peso.currentValue);
    }
  }

  informar () 
  {
    console.log("PESO " + this.peso);
    console.log("ALTURA " + this.altura);
  }

  calculoIMC ()
  {
    this.imc = this.peso / (this.altura * this.altura);
    console.log("IMC",this.imc);
  }


}
