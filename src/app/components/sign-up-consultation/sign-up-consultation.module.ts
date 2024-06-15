import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { SignUpConsultationComponent } from "./sign-up-consultation.component";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { MaskitoDirective } from "@maskito/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[SignUpConsultationComponent],
    exports:[SignUpConsultationComponent],
    imports: [CommonModule,
        HttpClientModule,
        RouterModule,
        ScrollFadeDirectiveModule,
        AngularSvgIconModule,
        MaskitoDirective,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class SignUpConsultationModule {}