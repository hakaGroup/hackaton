import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './client/auth-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FridgeComponent } from './pages/fridge/fridge.component';
import { GroceryListComponent } from './pages/grocery-list/grocery-list.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'panel', component: MainComponent, canActivate: [AuthGuardService],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'fridge', component: FridgeComponent },
      { path: 'grocery-list', component: GroceryListComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
