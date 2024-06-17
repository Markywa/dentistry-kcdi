import { CommonModule } from "@angular/common";
import { ContactsPageComponent } from "./contacts-page.component";
import { NgModule } from "@angular/core";
import { LayoutPageModule } from "../layout-page/layout-page.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ScrollFadeDirectiveModule } from "../../directive/scroll-fade.module";
import { PricesPageRoutingModule } from "../prices-page/prices-page-routing.module";
import { ContactsPageRoutingModule } from "./contacts-page-routing.module";
import { ContactMapComponent } from "../../components/contact-map/contact-map.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderInformationModule } from "../../components/header-information/header-information.module";


@NgModule({
    declarations: [ContactsPageComponent, ContactMapComponent],
    exports: [ContactsPageComponent],
    imports: [
        CommonModule,
        ContactsPageRoutingModule,
        LayoutPageModule,
        HttpClientModule,
        AngularSvgIconModule,
        ScrollFadeDirectiveModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderInformationModule
    ],
})

export class ContactsPageModule {}