import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return "inside mymult";
  // }
  transform(value: number , param : number): number
   {

    //return addition of two nos
    return value * param;
  }

}
