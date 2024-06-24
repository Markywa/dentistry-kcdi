import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent {
    public isMobile: boolean = true;
    public deviceType!: DeviceType;
    public mainPhoto: string = 'assets/images/welcome-image.png';
    constructor(private mobileService: MobileService, private cdr: ChangeDetectorRef){};

    ngOnInit(): void {
        this.mobileService._userDevice$.subscribe((device) => {
            this.deviceType = device; 
            this.mobileAdaptation(device);
            this.cdr.markForCheck()})
    }

    private mobileAdaptation(device: DeviceType): void {
        if(this.deviceType === 'mobile') {
            this.mainPhoto = 'assets/images/welcome-image-mobile.png';
        }
            else if (this.deviceType === 'tablet') {
                this.mainPhoto = 'assets/images/welcome-image-tablet.png';
            } else {
                this.mainPhoto = 'assets/images/welcome-image.png';
            }
}
}