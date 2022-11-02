import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createFakeArray' //çagırma 
})
export class CreateFakeArrayPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number): number[] {
    let fakeArray: number[] = [];
    for (let n = 1; n <= value; n++) {
      fakeArray.push(n);
    }
    return fakeArray;
  }

}

// value :uygulanan ilgili değer



