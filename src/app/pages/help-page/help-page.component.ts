import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-help-page',
    templateUrl: './help-page.component.html',
    styleUrls: ['./help-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HelpPageComponent implements OnInit{
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