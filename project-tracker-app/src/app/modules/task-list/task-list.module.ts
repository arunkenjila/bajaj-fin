import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskListRoutingModule } from "./task-list-routing.module";

@NgModule({
    declarations: [TaskListComponent],
    imports: [CommonModule, TaskListRoutingModule]
})
export class TaskListModule {}
