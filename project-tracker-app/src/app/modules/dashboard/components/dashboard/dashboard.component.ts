import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/shared/services/api/api.service";
import { CommonService } from "src/app/shared/services/common/common.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
    isLoading: boolean = false;
    projects: any[] = [];
    errorMessage: string = "";

    constructor(
        private apiService: ApiService,
        private commonService: CommonService,
        private toastr: ToastrService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.apiService.getProjects().subscribe({
            next: (res: any) => {
                this.isLoading = false;
                const projectsResponse = res?.projects;
                projectsResponse.forEach((element: any) => {
                    this.projects.push(element);
                });
                this.commonService.projects = this.projects;
                this.toastr.success("Success", "Projects fetched successfully");
            },
            error: () => {
                this.isLoading = false;
                this.errorMessage =
                    "Unable to load the data !!!. Please try again later";
            }
        });
    }

    gotoProjectDetail(project: any) {
        this.commonService.selectedProject = project;
        this.commonService.gotoProjectDetail();
    }

    trackByFn(index, item) {
        return item.id;
    }
}
