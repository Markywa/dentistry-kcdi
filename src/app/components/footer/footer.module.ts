import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer.component";
import { MaskitoDirective } from '@maskito/angular'
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpConsultationModule } from "../sign-up-consultation/sign-up-consultation.module";
import { VacanciesFormComponent } from "../vacancies-form/vacancies-form.component";


@NgModule({
    declarations:[
        FooterComponent,
        VacanciesFormComponent
    ],
    exports:[FooterComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        MaskitoDirective,
        ScrollFadeDirectiveModule,
        FormsModule,
        ReactiveFormsModule,
        SignUpConsultationModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class FooterModule {}