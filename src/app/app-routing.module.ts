import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";
import { LoginComponent } from "./modules/auth/components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { authGuard } from "./guards/auth.guard";
import { ProductsComponent } from "./modules/products/components/products/products.component";
import { CartComponent } from "./modules/cart/components/cart/cart.component";
import { OrdersComponent } from "./modules/orders/components/orders/orders.component";
import { adminGuard } from "./guards/admin.guard";

const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [authGuard] },
    { path: "", component: HomeComponent, canActivate: [authGuard] },
    { path: "products", component: ProductsComponent, canActivate: [authGuard] },
    { path: "cart", component: CartComponent, canActivate: [authGuard] },
    { path: "orders", component: OrdersComponent, canActivate: [authGuard, adminGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
