import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectCreationComponent } from "./project-creation.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ToastrModule } from "ngx-toastr";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";

describe("ProjectCreationComponent", () => {
    let component: ProjectCreationComponent;
    let fixture: ComponentFixture<ProjectCreationComponent>;
    let projectName: any;
    let description: any;
    let dueDate: any;
    let priority: any;
    let status: any;
    let submitButton: any;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectCreationComponent],
            imports: [
                ReactiveFormsModule,
                FormsModule,
                HttpClientTestingModule,
                MatSelectModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                ToastrModule.forRoot()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectCreationComponent);
        component = fixture.componentInstance;
        projectName = component.projectFormGroup.controls["projectName"];
        description = component.projectFormGroup.controls["description"];
        priority = component.projectFormGroup.controls["priority"];
        status = component.projectFormGroup.controls["status"];
        dueDate = component.projectFormGroup.controls["dueDate"];
        submitButton = fixture.debugElement.query(
            By.css("button[type=submit]")
        );
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it(`should have a title 'Create Project'`, () => {
        const titleSpan = fixture.debugElement.query(By.css(".header"));
        expect(titleSpan.nativeElement.innerText).toEqual("Create Project");
    });

    it("Reactive Form Validation - project name", () => {
        checkElementStatus("projectName");
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

    it("Reactive Form Validation - status", () => {
        checkElementStatus("status");
    });

    function checkElementStatus(elementName: string): void {
        component.projectFormGroup.controls[elementName].setValue("");
        expect(component.projectFormGroup.controls[elementName].status).toBe(
            "INVALID"
        );
        checkFormGroupStatusInvalid();
        component.projectFormGroup.controls[elementName].setValue(elementName);
        checkFormGroupStatusInvalid();
        expect(component.projectFormGroup.controls[elementName].status).toBe(
            "VALID"
        );
    }

    function checkFormGroupStatusInvalid() {
        expect(component.projectFormGroup.status).toBe("INVALID");
    }
});
