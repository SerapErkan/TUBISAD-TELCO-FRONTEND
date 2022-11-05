import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/libs';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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








}
