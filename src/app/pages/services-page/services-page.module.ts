import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { ServicesPageComponent } from "./services-page.component";
import { ServicesPageRoutingModule } from "./services-page-routing.component";
import { ServiceDescriptionComponent } from "../../components/service-description/service-description.component";
import { EmployeesCaouselModule } from "../../components/employees-carusel/employees-carusel.module";


@NgModule({
    declarations: [ServicesPageComponent, ServiceDescriptionComponent],
    exports: [ServicesPageComponent],
    imports: [
        CommonModule,
        ServicesPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderInformationModule,
        EmployeesCaouselModule
    ],
})

export class ServicesPageModule {}