import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';


const routes: Routes = [{
  path: "",
  component: CustomersComponent
},
{
  path: "details/:id ",
  component:DetailCustomerComponent,
}
// ,
// {
//   path:"",
//   redirectTo:"/customers",
//   pathMatch:"full"
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
