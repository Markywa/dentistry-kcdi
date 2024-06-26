import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ServicesDataService } from "../../services/services-data/services-data.service";
import { EmployeesResponse } from "../../interfaces/employees.interface";

@Component({
    selector: 'app-service-description',
    templateUrl: './service-description.component.html',
    styleUrls: ['./service-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ServiceDescriptionComponent implements OnInit {
    @Output() changeServiceName = new EventEmitter<string>();
    constructor(private activatedRoute: ActivatedRoute, private servicesDataService: ServicesDataService){}
    public serviceEntity!: any;
    public specialist: EmployeesResponse[] = [];

    ngOnInit(): void {
        window.scrollTo(0, 0);
        this.activatedRoute.params.subscribe((data) => {
            this.servicesDataService.getService(data['id']).subscribe((data) => {
                this.specialist = [];
                this.changeServiceName.emit(data.title);
                this.serviceEntity = {
                    ...data, 
                    about: data.about.replace(/\r\n|\n|\r/g, '<br>'), 
                    main_directions: data.main_directions.replace(/\r\n|\n|\r/g, '<br>')}
                this.specialist.push(data.specialist)
            });
        })
    }
}