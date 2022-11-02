import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitePipe'
})
export class SplitePipePipe implements PipeTransform {

  transform(value: string, operator: string): string[]{
 

    return value.split(operator);
  }

}




  // uyguladığım metinde operatöre göre split yap geriye array olarak elemanları dön
  // "halit,anıl,burak,burak,büşranur,doğacan"
  // ["halit","anıl","burak","burak","büşranur"]