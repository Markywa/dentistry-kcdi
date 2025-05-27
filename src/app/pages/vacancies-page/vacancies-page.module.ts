import { NgModule } from "@angular/core";
import { VacanciesPageComponent } from "./vacancies-page.component";
import { CommonModule } from "@angular/common";
import { StockPageRoutingModule } from "../stock-page/stock-page-routing.module";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { FormsModule } from "@angular/forms";
import { VacanciesPageRoutingModule } from "./vacancies-page-routing.module";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { VacanciesDescriptionComponent } from "../../components/vacancies-description/vacancies-description.component";

@NgModule({
    declarations: [
        VacanciesPageComponent,
        VacanciesDescriptionComponent
    ],
    exports: [VacanciesPageComponent],
    imports: [
        CommonModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        FormsModule,
        VacanciesPageRoutingModule,
        HeaderInformationModule
    ],
})

export class VacanciesPageModule {}