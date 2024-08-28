import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/services/common/common.service";
import { PRIORITY, STATUS } from "src/app/shared/utils/constants";

@Component({
    selector: "app-project-details",
    templateUrl: "./project-details.component.html",
    styleUrls: ["./project-details.component.scss"]
})
export class ProjectDetailsComponent {
    selectedProject: any = {};

    tasks: any[] = [
        {
            id: "323wds",
            title: "Add search icon in the search bar",
            description: "",
            status: STATUS.HOLD,
            priority: PRIORITY.MEDIUM,
            assign: "Mark John"
        },
        {
            id: "353wds",
            title: "Needed to suport premium members",
            description: "",
            status: STATUS.TODO,
            priority: PRIORITY.MEDIUM,
            assign: "Emily Jack"
        },
        {
            id: "123wds",
            title: "Login page is not properly displaying",
            description: "",
            status: STATUS.COMPLETED,
            priority: PRIORITY.LOW,
            assign: "Gaurav pal"
        },
        {
            id: "3e3wds",
            title: "Add search icon in the search bar",
            description: "",
            status: STATUS.TODO,
            priority: PRIORITY.HIGH,
            assign: "Smriti P"
        },
        {
            id: "7323wds",
            title: "Need a loader",
            description: "",
            status: STATUS.INPROGRESS,
            priority: PRIORITY.LOW,
            assign: "Arun Kenjila"
        },
        {
            id: "g323wds",
            title: "Add search icon in the search bar",
            description: "",
            status: STATUS.TODO,
            priority: PRIORITY.MEDIUM,
            assign: "Mark John"
        }
    ];

    people: any[] = [
        {
            id: "23asj",
            name: "Mark John",
            avatar: "assets/av3.png"
        },
        {
            id: "2356",
            name: "Emily Jack",
            avatar: "assets/av5.png"
        },
        {
            id: "34f",
            name: "Gaurav pal",
            avatar: "assets/av4.jpeg"
        },
        {
            id: "46sd",
            name: "Smriti P",
            avatar: "assets/av2.png"
        },
        {
            id: "ee3asj",
            name: "Arun Kenjila",
            avatar: "assets/av1.png"
        }
    ];

    constructor(
        private commonService: CommonService,
        private toastr: ToastrService
    ) {
        this.selectedProject = commonService?.selectedProject;
    }

    gotoCreateTask(): void {
        this.commonService.gotoCreateTask();
    }

    changeAssignee(event: any): void {
        const taskId = event?.taskId;
        const assignee = event?.assignee;

        for (let i = 0; i < this.tasks.length; i++) {
            if (
                this.tasks[i].id === taskId &&
                assignee !== this.tasks[i].assign
            ) {
                this.tasks[i].assign = assignee;
                this.toastr.success(
                    "Success",
                    "Task assignee changed successfully"
                );
            }
        }
    }
}
