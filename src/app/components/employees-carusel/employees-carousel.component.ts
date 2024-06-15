import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { EmployeesResponse } from "../../interfaces/employees.interface";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";

@Component({
    selector: 'app-employees-carousel',
    templateUrl: './employees-carousel.component.html',
    styleUrls: ['./employees-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class EmployeesCarouselComponent implements OnInit{
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