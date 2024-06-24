import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ServicesDataService } from "../../services/services-data/services-data.service";

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ServicesComponent implements OnInit{
    constructor(private servicesDataService: ServicesDataService){}
    public servicesList: any[] = [];
    ngOnInit(): void {
        this.servicesDataService.getServicesList().subscribe((data) => this.servicesList = data);
    }
}