import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'garant'
})
export class GarantPipe implements PipeTransform {

  transform(prix:number): string {
    if (prix<250)
    return "Garantie 1 an";
    else if(prix<500)
    return "Garantie 2 ans";
    else if(prix<1000)
    return "Garantie 3 ans";
    else if(prix>1000)
    return "Garantie 5 ans";
  }

}
