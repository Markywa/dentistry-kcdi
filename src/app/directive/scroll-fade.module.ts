import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollFadeDirective } from "./scroll-fade.directive";


@NgModule({
    declarations:[
        ScrollFadeDirective
    ],
    exports:[ScrollFadeDirective],
    imports: [CommonModule,],
})

export class ScrollFadeDirectiveModule {}