import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-task-list",
    templateUrl: "./task-list.component.html",
    styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent {
    @Input() tasks: any;
    @Input() people: any;

    @Output() changeAssignee = new EventEmitter<any>();

    changeProjectAssignee(taskId: string, assignee: string): void {
        this.changeAssignee.emit({
            taskId: taskId,
            assignee: assignee
        });
    }

    trackByFn(index, item) {
        return item.id;
    }
}
