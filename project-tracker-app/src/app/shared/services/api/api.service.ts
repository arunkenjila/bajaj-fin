import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { CommonService } from "../common/common.service";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    constructor(
        private httpClient: HttpClient,
        private commonService: CommonService
    ) {}

    getProjects(): Observable<any> {
        return this.httpClient.get("./assets/db.json");
    }

    createProject(body: any): Observable<any> {
        if (
            !body.projectName ||
            !body.description ||
            !body.dueDate ||
            !body.priority ||
            !body.status
        )
            return throwError("Please fill all the details");
        this.commonService.projects.push(body);
        return of("Project created Successfully");
    }

    createTask(body: any): Observable<any> {
        if (
            !body.taskName ||
            !body.description ||
            !body.dueDate ||
            !body.priority ||
            !body.status ||
            !body.assignee
        )
            return throwError("Please fill all the details");
        return of("Task added Successfully");
    }
}
