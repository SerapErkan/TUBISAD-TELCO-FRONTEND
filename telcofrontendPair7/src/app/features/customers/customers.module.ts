import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersService } from 'src/libs/services/customers.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/libs/pipes/filter.pipe';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CustomersComponent,FilterPipe, DetailComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,FormsModule
  ],
  providers:[CustomersService]
})
export class CustomersModule { }
