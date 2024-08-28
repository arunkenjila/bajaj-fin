import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

const routes: Routes = [{ path: "", component: ProjectDetailsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectDetailRoutingModule {}
