import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { EmployeesResponse } from "../../interfaces/employees.interface";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-specialist-page',
    templateUrl: './specialist-page.component.html',
    styleUrls: ['./specialist-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpecialistPageComponent implements OnInit {
    constructor(private employeesListService: EmployeesListService, private cdr: ChangeDetectorRef, private mobileService: MobileService){}
    public employeesList: EmployeesResponse[] = [];
    public userDevice!: DeviceType;
    ngOnInit(): void {
        this.employeesListService.getEmployeesList()
            .subscribe((data) => {
                this.employeesList = data;
                this.cdr.markForCheck();
        })
        this.mobileService._userDevice$.subscribe((device) => {
            this.userDevice = device;
            this.cdr.markForCheck();
        })
    }
}