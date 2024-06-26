import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { SpecialistPageComponent } from "./specialist-page.component";
import { SpecialistPageRoutingModule } from "./specialist-page-routing.module";
import { EmployeesTeamComponent } from "../../components/employees-team/employees-team.component";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { EmployeesCaouselModule } from "../../components/employees-carusel/employees-carusel.module";

@NgModule({
    declarations: [
        SpecialistPageComponent,
        EmployeesTeamComponent,
    ],
    exports: [SpecialistPageComponent],
    imports: [
        CommonModule,
        SpecialistPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        HeaderInformationModule,
        EmployeesCaouselModule
    ],
})

export class SpecialistPageModule {}