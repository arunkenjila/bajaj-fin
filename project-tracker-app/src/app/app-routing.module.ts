import { NgModule } from "@angular/core";
import { RouterModule, type Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: () =>
            import("./modules/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            )
    },
    {
        path: "create-project",
        loadChildren: () =>
            import("./modules/project-creation/project-creation.module").then(
                (m) => m.ProjectCreationModule
            )
    },
    {
        path: "project-detail",
        loadChildren: () =>
            import("./modules/project-detail/project-detail.module").then(
                (m) => m.ProjectDetailModule
            )
    },
    {
        path: "create-task",
        loadChildren: () =>
            import("./modules/task-creation/task-creation.module").then(
                (m) => m.TaskCreationModule
            )
    },
    {
        path: "task-list",
        loadChildren: () =>
            import("./modules/task-list/task-list.module").then(
                (m) => m.TaskListModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
