import { NgModule } from "@angular/core";
import { type Routes, RouterModule } from "@angular/router";
import { TaskCreationComponent } from "./components/task-creation/task-creation.component";

const routes: Routes = [{ path: "", component: TaskCreationComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskCreationRoutingModule {}
