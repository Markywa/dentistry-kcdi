import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-reviews-page',
    templateUrl: './reviews-page.component.html',
    styleUrls: ['./reviews-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ReviewsPageComponent implements OnInit{
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