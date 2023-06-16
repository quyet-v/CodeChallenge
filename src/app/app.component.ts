import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "code-challenge";

    displayHeader = false;

    constructor (private readonly router: Router) { }

    ngOnInit () {
        this.router.events.subscribe((event) => {
            // checks to see if navigation is completed and is on login page
            if (this.router.url == "/login") {
                this.displayHeader = false;
            } else {
                this.displayHeader = true;
            }
        });
    }
}
