import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "service",
    loadChildren: () => import('./service/service.module').then(m => m.ServiceModule)
  },
  {
    path: "product",
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: "customer",
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: "roles",
    loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: "category",
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
  }



   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
