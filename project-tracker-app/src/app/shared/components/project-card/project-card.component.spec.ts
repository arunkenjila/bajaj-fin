import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectCardComponent } from "./project-card.component";
import { ToastrService } from "ngx-toastr";
import { MatIconModule } from "@angular/material/icon";

describe("ProjectCardComponent", () => {
    let component: ProjectCardComponent;
    let fixture: ComponentFixture<ProjectCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectCardComponent],
            providers: [{ provide: ToastrService, useValue: {} }],
            imports: [MatIconModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
