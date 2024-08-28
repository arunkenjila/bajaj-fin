import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";
import { ProjectCreationComponent } from "./components/project-creation/project-creation.component";

const routes: Routes = [{ path: "", component: ProjectCreationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectCreationRoutingModule {}
