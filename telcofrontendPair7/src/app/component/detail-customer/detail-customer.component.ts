

import { ThisReceiver } from '@angular/compiler';
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
  customerType!: boolean;
  error!:string;

  constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.customerId % 2 === 0) {
      this.customerType = false
    } if (this.customerId % 2 === 1) {
      this.customerType = true
    }

    this.individualCustomersSub()
    this.corporateCustomersSub()
  }



  individualCustomersSub() {
    this.customersService.getIndividualCustomerDetail(this.customerId).subscribe({

      next: (res) => {
        this.individualCustomersDetail = res;
      },
      error: (err) => {
       console.log(err);
       this.error = err.statusText;
      },
      complete: () => {
        console.log(this.individualCustomersDetail, "individualCustomers")
      },

    })
  }

  corporateCustomersSub() {
    this.customersService.getCorporateCustomersDetail(this.customerId).subscribe({
      next: (res) => {
        this.corporateCustomersDetail = res;
      },
      error: (err) => {
       console.log(err);
       this.error = err.statusText;
      },
      complete: () => {
        console.log(this.corporateCustomersDetail, "CorporateCustomers")

      }

    })
  }

  getCustomerService(){

  }
  getSustomerSubs(){
 this.customersService.getsubscriptionsDetail(this.customerId).subscribe({
  next:(res)=>{

  },
  error:(err)=>{

  },
  complete:()=>{
    
  }
 })
  }



}

  //2.yol
  //   this.route.params.subscribe(params => {
  //   this.customersService.getsubscriptionsDetail(+params['id']).subscribe(response =>{
  //   this.customerId = response
  //   console.log(response);
  //     } )
  //   });
  