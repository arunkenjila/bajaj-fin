import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ApiService } from "src/app/shared/services/api/api.service";
import { CommonService } from "src/app/shared/services/common/common.service";
import { PRIORITY, STATUS } from "src/app/shared/utils/constants";

@Component({
    selector: "app-task-creation",
    templateUrl: "./task-creation.component.html",
    styleUrls: ["./task-creation.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskCreationComponent {
    taskFormGroup: FormGroup;

    projectId: string = "";
    projectName: string = "";

    statusArray: string[] = [
        STATUS.TODO,
        STATUS.INPROGRESS,
        STATUS.HOLD,
        STATUS.COMPLETED
    ];

    priorityArray: string[] = [PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH];

    people: any[] = [
        {
            id: "23asj",
            name: "Mark John"
        },
        {
            id: "2356",
            name: "Emily Jack"
        },
        {
            id: "34f",
            name: "Gaurav pal"
        },
        {
            id: "46sd",
            name: "Smriti P"
        },
        {
            id: "ee3asj",
            name: "Arun Kenjila"
        }
    ];

    minDate: Date;
    maxDate: Date;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private toastr: ToastrService,
        private commonService: CommonService
    ) {
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 20, 0, 1);
        this.maxDate = new Date(currentYear + 1, 11, 31);

        this.projectId = commonService?.selectedProject?.id;
        this.projectName = commonService?.selectedProject?.projectName;

        this.taskFormGroup = this.fb.group({
            taskName: ["", Validators.required],
            description: ["", Validators.required],
            dueDate: ["", Validators.required],
            priority: [PRIORITY.LOW, Validators.required],
            status: [STATUS.TODO, Validators.required],
            assignee: ["", Validators.required]
        });
    }

    formatDate(inputDate: string): string {
        const dateObj = new Date(inputDate);

        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ];

        const day = dateObj.getDate();
        const monthIndex = dateObj.getMonth();
        const year = dateObj.getFullYear();

        const formattedDate = `${day}-${monthNames[monthIndex]}-${year}`;

        return formattedDate;
    }

    onSubmit(): void {
        let formattedDate = this.formatDate(
            this.taskFormGroup.controls["dueDate"].value
        );
        this.taskFormGroup.controls["dueDate"].setValue(formattedDate);
        if (!this.projectId || !this.projectName) {
            this.toastr.error("Please check project ID and name", "Error");
            return;
        }
        this.apiService.createTask(this.taskFormGroup.value).subscribe({
            next: (res: any) => {
                this.toastr.success(res, "Success");
                this.commonService.gotoProjectDetail();
            },
            error: (err: any) => {
                this.toastr.error(err, "Failure");
            }
        });
    }

    trackByFn(index, item) {
        return item;
    }
}
