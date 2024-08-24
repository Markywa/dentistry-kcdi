import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./layout-page.component";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FooterModule } from "../../components/footer/footer.module";
import { TopMenuModule } from "../../components/top-menu/top-menu.module";
import { ModalComponent } from "../../components/modal/modal.component";
import { CallbackComponent } from "../../components/callback/callback.component";
import { MaskitoDirective } from "@maskito/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpConsultationModule } from "../../components/sign-up-consultation/sign-up-consultation.module";
import { ReviewsSendComponent } from "../../components/reviews-send/reviews-send.component";

@NgModule({
    declarations:[
        LayoutPageComponent, 
        ModalComponent, 
        CallbackComponent,
        ReviewsSendComponent,
    ],
    exports:[LayoutPageComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        FooterModule,
        TopMenuModule,
        AngularSvgIconModule,
        MaskitoDirective,
        FormsModule,
        ReactiveFormsModule,
        SignUpConsultationModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class LayoutPageModule {}