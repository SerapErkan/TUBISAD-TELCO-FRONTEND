import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';



const routes: Routes = [{
  path:"",
  component: CustomersComponent,
  
  // children: [
  //   {
  //     path:"details/:id ",
  //     component: DetailCustomerComponent,
  //   }, 
  //   // {
  //   //   path: "",
  //   //   redirectTo: "/customers",
  //   //   pathMatch: "full"
  //   // }
  // ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
