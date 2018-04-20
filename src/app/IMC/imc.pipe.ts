import { Pipe, PipeTransform } from '@angular/core';
import { TipoIMC } from './imc.model';

@Pipe(
    {
        name: 'imcpipe'
    }
)

export class ImcPipe implements PipeTransform {

    transform(valor:TipoIMC) : string {
        let valor_alfanumerico : string;

            valor_alfanumerico = TipoIMC[valor];
        return valor_alfanumerico;
    }



}