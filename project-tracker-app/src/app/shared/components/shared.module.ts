import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [HeaderComponent, ProjectCardComponent, TaskListComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        MatCardModule,
        CdkTreeModule,
        MatSnackBarModule,
        MatStepperModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatDialogModule,
        MatDividerModule,
        MatTooltipModule,
        MatMenuModule,
        MatBadgeModule,
        FormsModule,
        MatNativeDateModule
    ],
    exports: [HeaderComponent, ProjectCardComponent, TaskListComponent]
})
export class SharedModule {}
