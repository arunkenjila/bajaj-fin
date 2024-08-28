import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskCreationComponent } from "./components/task-creation/task-creation.component";
import { TaskCreationRoutingModule } from "./task-creation-routing.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
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
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskCreationComponent],
    imports: [
        CommonModule,
        TaskCreationRoutingModule,
        ReactiveFormsModule,
        FormsModule,
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
        MatDialogModule,
        MatDividerModule,
        MatTooltipModule,
        MatMenuModule,
        MatBadgeModule,
        MatNativeDateModule,
        MatDatepickerModule
    ]
})
export class TaskCreationModule {}
