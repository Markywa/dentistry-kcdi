import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { EmployeesResponse, SpecialistsResponse } from "../../interfaces/employees.interface";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { DeviceType } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-employees-carousel-mobile',
    templateUrl: './employees-carousel-mobile.component.html',
    styleUrls: ['./employees-carousel-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class EmployeesCarouselMobileComponent {
    constructor(
        private cdr: ChangeDetectorRef, 
        private employeesListService: EmployeesListService){}
    @Input() employeesList: EmployeesResponse[] = [];
    @Input() small: boolean = false;
    @Input() deviceType: DeviceType = 'desktop';
    public specialistList: SpecialistsResponse[] = [];
    public pageLength!: number;
    public currentSpecialist!: SpecialistsResponse;
    public currentPage!: number;
    ngOnInit(){
        this.employeesListService.getSpecialistsList()
        .subscribe((data) => {
            this.specialistList = data;
            this.pageLength = data.length;
            this.selectSpecialist(1);
            this.cdr.markForCheck();
        })
    }

    selectSpecialist(num: number): void {
        console.log(this.currentPage);
        this.currentSpecialist = this.specialistList[num - 1];
        this.currentPage = num;
    }

    public nextPage(){
        if(this.currentPage <= this.pageLength + 1){
            this.currentPage++;
            this.selectSpecialist(this.currentPage);
            this.cdr.markForCheck()
        } else {
            return;
        }    
    }

    public previousPage(){
        if(this.currentPage > 1){
            this.currentPage--;
            this.selectSpecialist(this.currentPage);
            this.cdr.markForCheck()
        } else {
            return;
        }
    }
}