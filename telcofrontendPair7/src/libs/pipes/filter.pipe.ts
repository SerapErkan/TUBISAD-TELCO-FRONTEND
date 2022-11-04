import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individual-customers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:IndividualCustomers[],firstName:string ): IndividualCustomers[] {
    return value.filter((service)=>service.firstName.toLocaleLowerCase().includes(firstName.toLocaleLowerCase())
    );
  }

}
