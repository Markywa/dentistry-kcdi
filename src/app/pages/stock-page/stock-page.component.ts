import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-stock-page',
    templateUrl: './stock-page.component.html',
    styleUrls: ['./stock-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StockPageComponent implements OnInit{
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