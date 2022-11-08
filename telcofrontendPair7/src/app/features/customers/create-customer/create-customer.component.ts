import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { Service, ServicesService } from 'src/libs';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',

})
export class CreateCustomerComponent implements OnInit {

  
  // indCustomerForm : boolean = false;
  // corpCustomerForm : boolean = false;
  // CustomerType : string = "";

  // servicelist : boolean = false;

  services!:Service[];
  createIndividualCustomer!: FormGroup;
  createCorporateCustomer!: FormGroup;
  createcreateServicesForm!: FormGroup;
  customerType :string=""
  activeForm:boolean=true;


  constructor(
    private servicesService :ServicesService ,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.createCorporateCustomersForm();
    this.createIndividualCustomerForm();
    this.getService();
 
  }

  createIndividualCustomerForm(){
    this.createIndividualCustomer = this.formBuilder.group({
      customerId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalIdentity: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      dateOfBirth:['',Validators.required]
    });
  }
    createCorporateCustomersForm(){
      this.createCorporateCustomer = this.formBuilder.group({
        customerId: ['', Validators.required],
        companyName: ['', Validators.required],
        taxNumber: ['', [Validators.required,Validators.minLength(5)]]
      });
  }


getService(){
  this.servicesService.getServices().subscribe((res)=>{
    this.services=res;
  })
}


 
   typeSelection(value:boolean){
    if(value){
    this.activeForm=true;
    }else{
    this.activeForm=false;
    }
  }
  
}