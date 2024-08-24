import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { SignUpConsultationModule } from "../../components/sign-up-consultation/sign-up-consultation.module";
import { CollapseModule } from "../../directive/collapse/collapse.module";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { FormsModule } from "@angular/forms";
import { HelpPageComponent } from "./help-page.component";
import { HelpPageRoutingModule } from "./help-page-routing.module";
import { HelpDescriptionComponent } from "../../components/help-description/help-description.component";

@NgModule({
    declarations: [
        HelpPageComponent,
        HelpDescriptionComponent,
    ],
    exports: [HelpPageComponent],
    imports: [
        CommonModule,
        HelpPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        SignUpConsultationModule,
        CollapseModule,
        FormsModule,
        HeaderInformationModule
    ],
})

export class HelpPageModule {}