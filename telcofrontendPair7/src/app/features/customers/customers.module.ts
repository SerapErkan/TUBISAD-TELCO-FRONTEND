import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersService } from 'src/libs/services/customers.service';
import { FormsModule } from '@angular/forms';
import { FirtNamePipe, LastNamePipe, CustomerIdPipe, TaxNumberPipe, CompanyNamePipe, BirthDatePipe } from 'src/libs';



@NgModule({
  declarations: [

    CustomersComponent,
    //pipes
    FirtNamePipe,
    LastNamePipe,
    CustomerIdPipe,
    TaxNumberPipe,
    CompanyNamePipe,
    BirthDatePipe

  ],
  imports: [
    CommonModule,
    CustomersRoutingModule, FormsModule,
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
