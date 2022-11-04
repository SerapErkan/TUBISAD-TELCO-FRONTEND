import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{
  path: "",
  component: CustomersComponent
},
{
  path: "details/:customerId ",
  component: DetailComponent
}
,
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
