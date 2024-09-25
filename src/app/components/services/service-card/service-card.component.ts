import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ServicesCardComponent implements AfterViewInit{
    @Input() serviceList: any[] = [];
    public isRenderEnd = false;
    constructor(private router: Router){}
    public routToService(id: number): void {
        this.router.navigate(['services', id])
    }

    ngAfterViewInit(): void {
        this.isRenderEnd = true;
    }
}