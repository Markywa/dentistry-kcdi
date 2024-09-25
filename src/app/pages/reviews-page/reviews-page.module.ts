import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { AngularSvgIconModule } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { SignUpConsultationModule } from "../../components/sign-up-consultation/sign-up-consultation.module";
import { CollapseModule } from "../../directive/collapse/collapse.module";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";
import { ReviewsPageComponent } from "./reviews-page.component";
import { ReviewsPageRoutingModule } from "./reviews-page-routing.module";
import { ReviewsComponent } from "../../components/reviews/reviews.component";
import { ReviewsListComponent } from "../../components/reviews-list/reviews-list.component";
import { ReviewsCardComponent } from "../../components/reviews-list/reviews-card/reviews-card.component";
import { ReviewsPlatformComponent } from "../../components/reviews-platform/reviews-platform.component";

@NgModule({
    declarations: [
        ReviewsPageComponent,
        ReviewsComponent,
        ReviewsListComponent,
        ReviewsCardComponent,
        ReviewsPlatformComponent
    ],
    exports: [ReviewsPageComponent],
    imports: [
        CommonModule,
        ReviewsPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        SignUpConsultationModule,
        CollapseModule,
        HeaderInformationModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ReviewsPageModule {}