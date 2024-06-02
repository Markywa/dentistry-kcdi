import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer.component";

@NgModule({
    declarations:[FooterComponent],
    exports:[FooterComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule
    ],
    providers: [provideAngularSvgIcon()],
})

export class FooterModule {}