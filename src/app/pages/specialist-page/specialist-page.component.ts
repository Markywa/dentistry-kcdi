import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { EmployeesResponse } from "../../interfaces/employees.interface";

@Component({
    selector: 'app-specialist-page',
    templateUrl: './specialist-page.component.html',
    styleUrls: ['./specialist-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpecialistPageComponent implements OnInit {
    constructor(private employeesListService: EmployeesListService, private cdr: ChangeDetectorRef){}
    public employeesList: EmployeesResponse[] = [];
    ngOnInit(): void {
        this.employeesListService.getEmployeesList()
            .subscribe((data) => {
                this.employeesList = data;
                this.cdr.markForCheck();
        })
    }
}