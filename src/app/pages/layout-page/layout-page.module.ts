import { NgModule } from "@angular/core";
import { LayoutPageComponent } from "./layout-page.component";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { FooterModule } from "../../components/footer/footer.module";
import { TopMenuModule } from "../../components/top-menu/top-menu.module";

@NgModule({
    declarations:[LayoutPageComponent],
    exports:[LayoutPageComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        FooterModule,
        TopMenuModule,
    ],
    providers: [provideAngularSvgIcon()],
})

export class LayoutPageModule {}