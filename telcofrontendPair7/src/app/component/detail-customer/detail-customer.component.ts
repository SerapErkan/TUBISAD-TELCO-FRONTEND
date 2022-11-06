

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService, Sub } from 'src/libs';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { IndividualCustomers } from 'src/libs/models/individual-customers';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  customerId !: number;
  individualCustomersDetail!: IndividualCustomers[];
  corporateCustomersDetail !: CorporateCustomers[];

  constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.customerId)
    this.individualCustomersSub()
    this.corporateCustomersSub()
  }

  //  CustomersSub(){
  //   this.route.params.subscribe(params => {
  //     this.customersService.getsubscriptionsDetail(+params['id']).subscribe(response =>{
  //       this.customerId = response
  //       console.log(response);
  //     } )
  //   });
  // }
  

  individualCustomersSub() {
    this.customersService.getIndividualCustomerDetail(this.customerId).subscribe((response) => {
      this.individualCustomersDetail = response;
      console.log(this.corporateCustomersDetail)
    })
  }

  corporateCustomersSub() {
    this.customersService.getCorporateCustomersDetail(this.customerId).subscribe((response) => {
      this.corporateCustomersDetail = response;
      console.log(this.corporateCustomersDetail)
    })
  }





}
