import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SharedModule } from "./shared/components/shared.module";
import { ToastrModule, ToastrService } from "ngx-toastr";

class ToasterStub {
    showSuccess(message: string, title: string): void {}
    showError(message: string, title: string): void {}
    showInfo(message: string, title: string): void {}
    showWarning(message: string, title: string): void {}
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DashboardModule,
        HttpClientModule,
        SharedModule,
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
