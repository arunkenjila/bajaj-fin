import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskCreationComponent } from "./task-creation.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("TaskCreationComponent", () => {
    let component: TaskCreationComponent;
    let fixture: ComponentFixture<TaskCreationComponent>;
    let taskName: any;
    let description: any;
    let dueDate: any;
    let priority: any;
    let status: any;
    let assignee: any;
    let submitButton: any;
    let toastrService: ToastrService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TaskCreationComponent],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientTestingModule,
                MatSelectModule,
                MatInputModule,
                BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: ToastrService,
                    useValue: jasmine.createSpyObj("ToastrService", [
                        "success",
                        "error"
                    ])
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(TaskCreationComponent);
        toastrService = TestBed.inject(ToastrService);
        component = fixture.componentInstance;
        taskName = component.taskFormGroup.controls["taskName"];
        description = component.taskFormGroup.controls["description"];
        priority = component.taskFormGroup.controls["priority"];
        status = component.taskFormGroup.controls["status"];
        dueDate = component.taskFormGroup.controls["dueDate"];
        assignee = component.taskFormGroup.controls["assignee"];
        submitButton = fixture.debugElement.query(
            By.css("button[type=submit]")
        );
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it(`should have a title 'Create Task'`, () => {
        const titleSpan = fixture.debugElement.query(By.css(".header"));
        expect(titleSpan.nativeElement.innerText).toEqual("Create Task");
    });

    it("Reactive Form Validation - taskName", () => {
        checkElementStatus("taskName");
    });

    it("Reactive Form Validation - description", () => {
        checkElementStatus("description");
    });

    it("Reactive Form Validation - dueDate", () => {
        checkElementStatus("dueDate");
    });

    it("Reactive Form Validation - priority", () => {
        checkElementStatus("priority");
    });

    it("Reactive Form Validation - assignee", () => {
        checkElementStatus("assignee");
    });

    it("Reactive Form Validation - status", () => {
        checkElementStatus("status");
    });

    it("should throw error if project Id and name is not there", () => {
        component.projectId = "";
        component.projectName = "";
        fixture.detectChanges();
        component.onSubmit();
        expect(toastrService.error).toHaveBeenCalledWith(
            "Please check project ID and name",
            "Error"
        );
    });

    it("should throw error form is invalid", () => {
        component.projectId = "asaS";
        component.projectName = "ASAS";
        fixture.detectChanges();
        component.onSubmit();
        expect(toastrService.error).toHaveBeenCalledWith(
            "Please fill all the details",
            "Failure"
        );
    });

    function checkElementStatus(elementName: string): void {
        component.taskFormGroup.controls[elementName].setValue("");
        expect(component.taskFormGroup.controls[elementName].status).toBe(
            "INVALID"
        );
        checkFormGroupStatusInvalid();
        component.taskFormGroup.controls[elementName].setValue(elementName);
        checkFormGroupStatusInvalid();
        expect(component.taskFormGroup.controls[elementName].status).toBe(
            "VALID"
        );
    }

    function checkFormGroupStatusInvalid() {
        expect(component.taskFormGroup.status).toBe("INVALID");
    }
});
