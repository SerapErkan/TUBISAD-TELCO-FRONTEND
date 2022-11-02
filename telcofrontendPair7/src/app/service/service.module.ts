import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ServiceRoutingModule } from './service-routing.module';
import { ServicesComponent } from './services/services.component';
import { ServicesService } from 'src/libs';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers:[ServicesService]
  
})
export class ServiceModule { }


