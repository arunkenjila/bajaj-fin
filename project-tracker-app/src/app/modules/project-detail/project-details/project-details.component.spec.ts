import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectDetailsComponent } from "./project-details.component";
import { ToastrService } from "ngx-toastr";

describe("ProjectDetailsComponent", () => {
    let component: ProjectDetailsComponent;
    let fixture: ComponentFixture<ProjectDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectDetailsComponent],
            providers: [{ provide: ToastrService, useValue: {} }]
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
