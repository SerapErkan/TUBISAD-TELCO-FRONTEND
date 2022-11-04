import { Pipe, PipeTransform } from '@angular/core';
import { IndividualCustomers } from '../models/individual-customers';
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {



  transform(value:IndividualCustomers[],lastName?:string ,firstName?:string,customerId?:string ): any{
    if(lastName){
       return value.filter((service)=>service.firstName.toLocaleLowerCase().includes(lastName.toLocaleLowerCase())
    );
    }
   
  
if(firstName){
    return value.filter((service)=>service.firstName.toLocaleLowerCase().includes(firstName.toLocaleLowerCase())
    );
}
   
  
if(customerId){
   return value.filter((service)=>service.firstName.toString().includes(customerId)
    );
}
   
  }


}
