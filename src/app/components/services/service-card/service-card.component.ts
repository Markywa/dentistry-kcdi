import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ServicesCardComponent{
    @Input() serviceList: any[] = [];
    constructor(private router: Router){}
    public routToService(id: number): void {
        this.router.navigate(['services', id])
    }
}