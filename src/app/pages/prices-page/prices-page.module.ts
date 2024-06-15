import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { PricesPageComponent } from "./prices-page.component";
import { PricesPageRoutingModule } from "./prices-page-routing.module";
import { PricesDescriptionComponent } from "../../components/prices-description/prices-description.component";
import { SignUpConsultationModule } from "../../components/sign-up-consultation/sign-up-consultation.module";

@NgModule({
    declarations: [
        PricesPageComponent,
        PricesDescriptionComponent
    ],
    exports: [PricesPageComponent],
    imports: [
        CommonModule,
        PricesPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        SignUpConsultationModule,
    ],
})

export class PricePageModule {}