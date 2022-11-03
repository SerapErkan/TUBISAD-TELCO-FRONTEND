import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/libs/guards/auth.guard';
import { RolesComponent } from './features/roles/roles.component';
import { ServicesComponent } from './features/service/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    loadChildren: () => import('./features/service/service.module').then(m => m.ServiceModule),
  
  },
  {
    path: "products",
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule)
  },
  {
    path: "customers",
    loadChildren: () => import('./features/customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: "roles",
    loadChildren: () => import('./features/roles/roles.module').then(m => m.RolesModule)
  },
  {
    path: "categories",
    loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path:"**",
    component:NotFoundComponent
  }



   
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
