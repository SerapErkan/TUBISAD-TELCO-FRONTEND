import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "service",
    loadChildren: () => import('./features/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: "product",
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  {
    path: "customer",
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: "roles",
    loadChildren: () => import('./features/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: "category",
    loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: "**",
    component:NavbarComponent
  }



   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
