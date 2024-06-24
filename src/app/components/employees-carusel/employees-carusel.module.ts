import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { EmployeesCarouselComponent } from "./employees-carousel.component";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";


@NgModule({
    declarations:[
        EmployeesCarouselComponent,
    ],
    exports:[EmployeesCarouselComponent],
    imports: [
        CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        ScrollFadeDirectiveModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class EmployeesCaouselModule {}