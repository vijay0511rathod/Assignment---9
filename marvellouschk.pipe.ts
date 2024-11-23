import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouschk',
  standalone: true
})
export class MarvellouschkPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return "Inside marvellous pipe";
  // }
  transform(value: number,param : string) : string
   {
    if (param == "prime") {
      if (value <= 1) {
        return `${value} is not a prime number`;
      }
      for (let i = 2; i * i <= value; i++) {
        if (value % i === 0) {
          return `${value} is not a prime number`;
        }
      }
      return `${value} is a prime number`;
    }
    if (param == "Even") {
      if (value % 2 === 0) {
        return `${value} is an even number`;
      } else {
        return `${value} is not an even number`;
      }
      
    }
    if (param == "perfect") {
      let sum = 0;
      for (let i = 1; i <= value / 2; i++) {
        if (value % i === 0) {
          sum += i;
        }
      }
      if (sum === value && value > 0) {
        return `${value} is a perfect number`;
      } else {
        return `${value} is not a perfect number`;
      }
    }
    if (param == "odd") {
      if (value % 2 !== 0) {
        return `${value} is an odd number`;
      } else {
        return `${value} is not an odd number`;
      }
    }
    return "Invalid parameter";

      
    
    
  }

}
