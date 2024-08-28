import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root"
})
export class CommonService {
    projects: any[] = [];

    selectedProject: any;

    constructor(private router: Router) {}

    gotoHome(): void {
        this.router.navigateByUrl("/home");
    }

    gotoCreateProject(): void {
        this.router.navigateByUrl("/create-project");
    }

    gotoCreateTask(): void {
        this.router.navigateByUrl("/create-task");
    }

    gotoTaskList(): void {
        this.router.navigateByUrl("/task-list");
    }

    gotoProjectDetail(): void {
        this.router.navigateByUrl("/project-detail");
    }
}
