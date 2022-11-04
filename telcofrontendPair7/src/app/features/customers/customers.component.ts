import { Component, OnInit } from '@angular/core';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { Customer } from 'src/libs/models/customer';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CustomersService } from 'src/libs/services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers!: Customer[];
  corporateCustomers!: CorporateCustomers[];
  individualCustomers!: IndividualCustomers[];

  searchText:string=""

  constructor(private customersService: CustomersService ) {
   

   }

  ngOnInit(): void {
    this.getByCustomers();
   this.getByIndividualCustomers();
   this.getByCorporateCustomers()

    
  }
  getByCustomers(): void {
    this.customersService.getCustomer().subscribe((response) => {
      this.customers = response;
    });
  }
  getByIndividualCustomers(): void {
    this.customersService.getIndividualCustomers().subscribe((response) => {
      this.individualCustomers = response;
    });
  }
  getByCorporateCustomers(): void {
    this.customersService.getCorporateCustomers().subscribe((response) => {
      this.corporateCustomers = response;
    });
  }


}
