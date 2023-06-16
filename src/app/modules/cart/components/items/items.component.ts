import { Component, Input } from "@angular/core";
import { type Product } from "src/app/models/Product";

@Component({
    selector: "app-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})
export class ItemsComponent {
  @Input() items: Product[] | undefined;
  @Input() total = 0;
}
