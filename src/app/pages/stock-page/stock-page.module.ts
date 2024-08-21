import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { StockPageComponent } from "./stock-page.component";
import { StockPageRoutingModule } from "./stock-page-routing.module";
import { SignUpConsultationModule } from "../../components/sign-up-consultation/sign-up-consultation.module";
import { CollapseModule } from "../../directive/collapse/collapse.module";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { StockListComponent } from "../../components/stock-list/stock-list.component";
import { StockCardComponent } from "../../components/stock-list/stock-card/stock-card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        StockPageComponent,
        StockListComponent,
        StockCardComponent,
    ],
    exports: [StockPageComponent],
    imports: [
        CommonModule,
        StockPageRoutingModule,
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

export class StockPageModule {}