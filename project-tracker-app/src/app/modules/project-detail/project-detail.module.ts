import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectDetailRoutingModule } from "./task-creation-routing.module";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "src/app/shared/components/shared.module";

@NgModule({
    declarations: [ProjectDetailsComponent],
    imports: [
        CommonModule,
        ProjectDetailRoutingModule,
        MatIconModule,
        MatButtonModule,
        SharedModule
    ]
})
export class ProjectDetailModule {}
