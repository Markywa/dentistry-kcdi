import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-prices-page',
    templateUrl: './prices-page.component.html',
    styleUrls: ['./prices-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PricesPageComponent implements OnInit{
    public isMobileDevice: boolean = false;

    constructor(private mobileService: MobileService) {}
    ngOnInit(): void {
        this.mobileService._userDevice$.subscribe((device) => {
            if (device !== 'desktop'){
                this.isMobileDevice = true;
            } else {
                this.isMobileDevice = false;
            }
        })
    }
}