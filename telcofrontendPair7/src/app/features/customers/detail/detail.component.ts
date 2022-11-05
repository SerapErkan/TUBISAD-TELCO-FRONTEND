import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Input } from '@angular/core';
import { CustomersService } from 'src/libs';
import { IndividualCustomers } from 'src/libs/models/individual-customers';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // @Input() subscriptions!:IndividualCustomers

  subscriptions!:any;
  id!:number;

  constructor(private customersService:CustomersService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  // ngOnInit(): void {
  //   this.ActivatedRoute.params.subscribe(param => {
  //     this.id = +param['id'];  
  //     console.log(this.id);
  //   }
   
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.customersService.getIndividualCustomersId(+params['id']).subscribe(response => this.subscriptions = response)
    });
  }


 //snapshot
  // const id: string = route.snapshot.params.id;
  //   const url: string = route.snapshot.url.join('');
  //   const user = route.snapshot.data.user;




}
