import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { HeaderInformationComponent } from "./header-information.component";


@NgModule({
    declarations:[
        HeaderInformationComponent,
    ],
    exports:[HeaderInformationComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class HeaderInformationModule {}