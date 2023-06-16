import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [
        ProductsComponent,
        ProductComponent
    ]
})
export class ProductsModule { }
