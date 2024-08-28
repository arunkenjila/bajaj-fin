import { ChangeDetectionStrategy, Component, type OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api/api.service";
import { PRIORITY, STATUS } from "src/app/shared/utils/constants";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "src/app/shared/services/common/common.service";

@Component({
    selector: "app-project-creation",
    templateUrl: "./project-creation.component.html",
    styleUrls: ["./project-creation.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCreationComponent {
    projectFormGroup: FormGroup;

    statusArray: string[] = [
        STATUS.TODO,
        STATUS.INPROGRESS,
        STATUS.HOLD,
        STATUS.COMPLETED
    ];

    priorityArray: string[] = [PRIORITY.LOW, PRIORITY.MEDIUM, PRIORITY.HIGH];

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

        this.projectFormGroup = this.fb.group({
            projectName: ["", Validators.required],
            description: ["", Validators.required],
            dueDate: ["", Validators.required],
            priority: [PRIORITY.LOW, Validators.required],
            status: [STATUS.TODO, Validators.required]
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
            this.projectFormGroup.controls["dueDate"].value
        );
        this.projectFormGroup.controls["dueDate"].setValue(formattedDate);
        this.apiService.createProject(this.projectFormGroup.value).subscribe({
            next: (res: any) => {
                this.toastr.success(res, "Success");
                this.commonService.gotoHome();
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
