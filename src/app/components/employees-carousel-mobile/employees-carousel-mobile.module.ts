import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { EmployeesCarouselMobileComponent } from "./employees-carousel-mobile.component";


@NgModule({
    declarations:[
        EmployeesCarouselMobileComponent,
    ],
    exports:[EmployeesCarouselMobileComponent],
    imports: [
        CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        ScrollFadeDirectiveModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class EmployeesCaouselMobileModule {}