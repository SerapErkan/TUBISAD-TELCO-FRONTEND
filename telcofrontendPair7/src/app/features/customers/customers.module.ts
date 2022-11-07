import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersService } from 'src/libs/services/customers.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirtNamePipe, LastNamePipe, CustomerIdPipe, TaxNumberPipe, CompanyNamePipe, BirthDatePipe } from 'src/libs';
import { CreateCustomerComponent } from './create-customer/create-customer.component';



@NgModule({
  declarations: [

    CustomersComponent,
    //pipes
    FirtNamePipe,
    LastNamePipe,
    CustomerIdPipe,
    TaxNumberPipe,
    CompanyNamePipe,
    BirthDatePipe,
    CreateCustomerComponent

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule, FormsModule,ReactiveFormsModule
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
