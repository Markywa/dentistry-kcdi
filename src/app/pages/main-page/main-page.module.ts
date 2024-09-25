import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { CommonModule } from "@angular/common";
import { MainPageRoutingModule } from "./main-page-routing.module";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { AboutClinicComponent } from "../../components/about-clinic/about-clinic.component";
import { EmployeesComponent } from "../../components/employees/employees.component";
import { PersonCardComponent } from "../../components/employees/person-card/person-card.component";
import { ServicesComponent } from "../../components/services/services.component";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { ServicesCardComponent } from "../../components/services/service-card/service-card.component";
import { EmployeesCaouselMobileModule } from "../../components/employees-carousel-mobile/employees-carousel-mobile.module";
import { ReviewsCarouselComponent } from "../../components/reviews-carousel/reviews-carousel.component";

@NgModule({
    declarations: [
        MainPageComponent, 
        AboutClinicComponent,
        EmployeesComponent,
        PersonCardComponent,
        ServicesComponent,
        ServicesCardComponent,
        ReviewsCarouselComponent,
    ],
    exports: [MainPageComponent],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        HeaderInformationModule,
        EmployeesCaouselMobileModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MainPageModule {}