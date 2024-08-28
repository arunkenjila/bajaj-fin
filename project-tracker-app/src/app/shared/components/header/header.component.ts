import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common/common.service";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
    isInCreateProjectPage: boolean = false;

    constructor(
        public commonService: CommonService,
        private router: Router
    ) {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                if (event["url"] === "/create-project")
                    this.isInCreateProjectPage = true;
                else this.isInCreateProjectPage = false;
            });
    }
}
