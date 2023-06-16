import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        LoginComponent
    ]
})
export class AuthModule { }
