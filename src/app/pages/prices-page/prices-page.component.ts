import { ChangeDetectionStrategy, Component } from "@angular/core";
import { slideInAnimation } from "../../../assets/animations";

@Component({
    selector: 'app-prices-page',
    templateUrl: './prices-page.component.html',
    styleUrls: ['./prices-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PricesPageComponent {
    
}