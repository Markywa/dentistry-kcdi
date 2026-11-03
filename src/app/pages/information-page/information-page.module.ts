import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { InformationPageComponent } from "./information-page.component";
import { InformationPageModuleRouting } from "./information-page-routing.module";


@NgModule({
    declarations: [InformationPageComponent],
    exports: [InformationPageComponent],
    imports: [
        CommonModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderInformationModule,
        InformationPageModuleRouting
    ],
})

export class InformationPageModule {}