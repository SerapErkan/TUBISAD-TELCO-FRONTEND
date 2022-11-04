import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomersService } from 'src/libs/services/customers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: any

  constructor(private customersService: CustomersService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  // ngOnInit(): void {

    // this.ActivatedRoute.params.subscribe(param => {
    //   this.id = +param['id'];  
    //   console.log(this.id);
    // }
   
    // )
    // this.ActivatedRoute.params.subscribe(param=>{alert(param["id"]);});

  // }

  //  let id =this.ActivatedRoute.snapshot.paramMap.get('id');
  //  this.customersService.getIndividualCustomersId(id).subscribe(c=>this.individualCustomers)


  //   movetoContact(){
  //    this.router.navigate(['/subscriptions'],{queryParams: {customerId: '1'}})
  //  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      // this.loading = true;
      this.customersService.getIndividualCustomersId(params["customerId"]).subscribe(data => {
        this.id= data;
        console.log(this.id);
        // this.loading = false;
      })
    })
  }








}
