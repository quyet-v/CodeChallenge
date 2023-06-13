import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { ProductsComponent } from './modules/products/components/products/products.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: HomeComponent, canActivate: [authGuard]},
  {path: "products", component: ProductsComponent, canActivate: [authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
