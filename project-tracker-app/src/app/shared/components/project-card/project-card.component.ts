import { Component, Input } from "@angular/core";

@Component({
    selector: "app-project-card",
    templateUrl: "./project-card.component.html",
    styleUrls: ["./project-card.component.scss"]
})
export class ProjectCardComponent {
    @Input() project: any;

    getValue(totalIssues: number, completedIssues: number): number {
        const value = (100 * completedIssues) / totalIssues;
        return value;
    }
}
