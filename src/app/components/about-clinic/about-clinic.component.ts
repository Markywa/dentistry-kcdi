import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from "@angular/core";
import { DeviceType } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-about-clinic',
    templateUrl: './about-clinic.component.html',
    styleUrls: ['./about-clinic.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class AboutClinicComponent implements AfterViewInit {
    @Input() deviceType: DeviceType = 'desktop';
    public isRenderEnd: boolean = false;

    ngAfterViewInit(): void {
        this.isRenderEnd = true;
    }
}