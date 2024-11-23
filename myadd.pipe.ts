import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myadd',
  standalone: true
})
export class MyaddPipe implements PipeTransform {

  transform(value: number , param : number): number
   {

    //return addition of two nos
    return value + param;
  }

}
