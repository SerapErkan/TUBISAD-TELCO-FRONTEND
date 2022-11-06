import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/libs';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  subscriptions!:any;
  id!:number;

  constructor(private customersService:CustomersService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.customersService.getIndividualCustomerDetail(+params['id']).subscribe(response =>{
        this.subscriptions = response
        console.log(response)
      } )
    });
  }

}
