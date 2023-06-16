import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./modules/auth/auth.module";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProductsModule } from "./modules/products/products.module";
import { CartModule } from "./modules/cart/cart.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { DialogComponent } from "./components/dialog/dialog.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        DialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        ProductsModule,
        CartModule,
        MatIconModule,
        OrdersModule
    ],
    providers: [],
    bootstrap: [AppComponent, [FormsModule]]
})
export class AppModule { }
