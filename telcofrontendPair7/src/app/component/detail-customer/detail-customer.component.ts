

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/libs';
import { IndividualCustomers } from 'src/libs/models/individual-customers';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  id !: number ;
  details !: IndividualCustomers;
  constructor(private customersService:CustomersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

 }

 individualCustomersSub(){
  this.route.params.subscribe(params => {
    this.customersService.getIndividualCustomerDetail(+params['id']).subscribe(response =>{
      this.details = response[0]
      console.log(response);
    } )
  });
}

  corporateCustomersSub(){
    this.route.params.subscribe(params => {
      this.customersService.getIndividualCustomerDetail(+params['id']).subscribe(response =>{
        this.details = response[0]
        console.log(response);
      } )
    });
 }





}
