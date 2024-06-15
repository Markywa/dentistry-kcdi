import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularSvgIconModule, provideAngularSvgIcon } from "angular-svg-icon";
import { HttpClientModule } from "@angular/common/http";
import { TopMenuComponent } from "./top-menu.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[TopMenuComponent],
    exports:[TopMenuComponent],
    imports: [CommonModule,
        AngularSvgIconModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [provideAngularSvgIcon()],
})

export class TopMenuModule {}