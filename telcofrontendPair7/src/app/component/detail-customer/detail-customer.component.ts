import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService, Service, ServicesService, Sub } from 'src/libs';
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
  serviceCustomerDetail!:Service[];
  subscriptionsCustomerDetail!:Sub[];
  serviceId!:number[];



  customerType!: boolean;
  error!:string;
  
  constructor(
    private customersService: CustomersService,
     private route: ActivatedRoute, 
     private router: Router,
     private servicesService:ServicesService
     ) { }

  ngOnInit(): void {

    this.customerId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.customerId % 2 === 0) {
      this.customerType = false
    } if (this.customerId % 2 === 1) {
      this.customerType = true
    }

    this.individualCustomersSub()
    this.corporateCustomersSub()
    this.getCustomerSubs()
    this.getService()

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


  getCustomerSubs(){

  this.customersService.getsubscriptionsDetail(this.customerId).subscribe({
  next:(res)=>{
  this.subscriptionsCustomerDetail=(res.filter(f=>f.customerId===this.customerId));
  this.serviceId=this.subscriptionsCustomerDetail.map(sub =>sub.serviceId);

  },
  error:(err)=>{
    console.log(err);
    this.error = err.statusText;
  },
  complete:()=>{
    console.log(this.subscriptionsCustomerDetail, "Subscriptions")
    console.log(this.serviceId, "serviceID");
  }
 })
  }

  
getService(){
 
    this.servicesService.getServices().subscribe({
    next:(res)=>{
    this.serviceCustomerDetail=res
    console.log(this.serviceCustomerDetail,"servisler")
    },error:(err)=>{
      console.log(err);
      this.error = err.statusText;
    },
    complete:()=>{
        
    }
  }
  )
    
  };

  }



  



  //2.yol
  //   this.route.params.subscribe(params => {
  //   this.customersService.getsubscriptionsDetail(+params['id']).subscribe(response =>{
  //   this.customerId = response
  //   console.log(response);
  //     } )
  //   });
// }
// this.servicesService.getServicesDetail().subscribe({
//   next:(res)=>{
//   this.serviceCustomerDetail=res;
//   },
//   error:()=>{

//   },
//   complete() {
//     console.log()
//   },
// })

// }