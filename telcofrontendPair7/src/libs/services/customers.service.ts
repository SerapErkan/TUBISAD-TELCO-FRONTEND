
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, Subscription  } from 'rxjs'
import { environment } from 'src/environments/environment';
import { CorporateCustomers } from '../models/corporate-customers';
import { Customer } from '../models/customer';
import { IndividualCustomers } from '../models/individual-customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
connections=environment.api
  constructor(private http:HttpClient) {}
   

  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.connections.Url.customers.customers);
  }
  getIndividualCustomers():Observable<IndividualCustomers[]>{
    return this.http.get<IndividualCustomers[]>(this.connections.Url.customers.individualCustomers)
  }
  getCorporateCustomers():Observable<CorporateCustomers[]>{
   return this.http.get<CorporateCustomers[]>(this.connections.Url.customers.corporateCustomers)
  }


  //
  getIndividualCustomersId(customerId:number):Observable<IndividualCustomers[]>{
    return this.http.get<IndividualCustomers[]>('http://localhost:3000/subscriptions?custemerId='+ customerId);
  }

  
}