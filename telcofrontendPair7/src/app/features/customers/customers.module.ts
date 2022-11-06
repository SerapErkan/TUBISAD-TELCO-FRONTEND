import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersService } from 'src/libs/services/customers.service';
import { FormsModule } from '@angular/forms';

import { DetailComponent } from './detail/detail.component';
import { FirtNamePipe, LastNamePipe, CustomerIdPipe } from 'src/libs';



@NgModule({
  declarations: [
    
    CustomersComponent,
  DetailComponent,
    FirtNamePipe,
    LastNamePipe,
    CustomerIdPipe,
    
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule, FormsModule,
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
