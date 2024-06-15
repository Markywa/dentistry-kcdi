import { ChangeDetectionStrategy, Component } from "@angular/core";
import { slideInAnimation } from "../../../assets/animations";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent {
    
}