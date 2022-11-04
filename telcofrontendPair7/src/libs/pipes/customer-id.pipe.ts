import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individual-customers';

@Pipe({
  name: 'customerId'
})
export class CustomerIdPipe implements PipeTransform {

  transform(value:IndividualCustomers[],customerId:string ): IndividualCustomers[] {
    return value.filter(id => !customerId || id.nationalIdentity?.toString().toLocaleLowerCase().includes(customerId.toString().toLocaleLowerCase()))
  }

}
