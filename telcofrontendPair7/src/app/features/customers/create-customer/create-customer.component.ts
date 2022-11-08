import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
import { CustomersService, Service, ServicesService } from 'src/libs';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { IndividualCustomers } from 'src/libs/models/individual-customers';
import { CorporateCustomers } from 'src/libs/models/corporate-customers';
import { addCorpCustomer, addIndCustomer } from '../../../store/actions/customer.actions';
 import { indCustomerSelector, corpCustomerSelector } from '../../../store/selectors/customer.selector';
 import { serviceSelector } from '../../../store/selectors/service.selector';
 import { addService } from '../../../store/actions/service.actions';

 
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerType :boolean=true

  indCustomerForm! : FormGroup
  corpCustomerForm! : FormGroup
  CustomerType : string = "";
  servicelist : boolean = false;
  selectedService !: Service ;
  customerInfos : boolean = false;
  serviceSave !: Service[];

 
  services!:Service[];

  createcreateServicesForm!: FormGroup;
  activeForm:boolean=true;
  showIndCustomer : boolean = false;
  showCorpCustomer : boolean = false;
  serviceSelection !: Observable<Service[]>
  indCustomerSelection !: Observable<IndividualCustomers[]>
  corpCustomerSelection !: Observable<CorporateCustomers[]>
  indCustomerSave  !: IndividualCustomers[];
  corpCustomerSave  !: CorporateCustomers[];



  constructor(
    private servicesService :ServicesService ,
    private formBuilder:FormBuilder,
    private store :Store,
    private customerService :CustomersService
    ) { }

  ngOnInit(): void {
    this.getService();
 
  }

  individualForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20)]),
    nationalIdentity: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    birthDate: new FormControl('',Validators.required),
  });
  corporateForm = new FormGroup({
    companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    taxNumber: new FormControl('null', [Validators.required,Validators.minLength(3),Validators.maxLength(100) ]),
  });

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
  // ----------------222
  // CorpCustomer(){
  //   this.indCustomerForm = false;
  //   this.corpCustomerForm = true;
  // }
  
  onSubmitIndividual(){
     this.individualForm.reset();
     this.customerType = false;
     this.servicelist = true;
   }
   onSubmitCorporate(){
     this.individualForm.reset();
     this.customerType = false;
     this.servicelist = true;
   }

  getServices(){
    this.servicesService.getServices().subscribe(response => this.services = response)
  }

  addIndCustomer(){
    if (this.individualForm.invalid) {
      return;
    }

    this.store.dispatch(addIndCustomer({
      customer: this.individualForm.value as IndividualCustomers
    }));

    this.onSubmitIndividual();
   }

   addCorpCustomer(){
    if (this.corporateForm.invalid) {
      return;
    }

    this.store.dispatch(addCorpCustomer({
      customer: this.corporateForm.value as CorporateCustomers
    }));

     this.onSubmitCorporate();
   }
   

   addService(){
    this.servicelist = false
    this.customerInfos = true
    this.store.dispatch(addService({
      service: this.selectedService
    }));

    //this.store.select<Service[]>(selectedService).subscribe(response => this.serviceSave = response)

    this.serviceSelection = this.store.select(serviceSelector)
    this.serviceSelection.subscribe(response => { this.serviceSave = response })

    this.indCustomerSelection = this.store.select(indCustomerSelector)
    this.indCustomerSelection.subscribe(response => {this.indCustomerSave = response})

    this.corpCustomerSelection = this.store.select(corpCustomerSelector)
    this.corpCustomerSelection.subscribe(response => {this.corpCustomerSave = response})
    
    
   }
   saveCustomer(){
    console.log("denemmmeeee",this.corpCustomerSave);
    console.log("denemmmeeee2",{...this.corpCustomerSave});
    this.customerService.getCorporateCustomersDetail
    this.customerService.addCorporateCustomer(this.corpCustomerSave)
   }
   
  
}


