import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { EmployeesResponse, SpecialistsResponse } from "../../interfaces/employees.interface";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class EmployeesComponent implements OnInit, AfterViewInit{
    constructor(private employeesListService: EmployeesListService, private renderer: Renderer2, private cdr: ChangeDetectorRef){}
    public specialistList: SpecialistsResponse[] = [];
    public selectedPage: number = 1; 
    public pageLength: number = 0;
    public isRenderEnd: boolean = false;
    @ViewChild('image') image!: ElementRef;
    @ViewChild('card') card!: ElementRef;
    ngOnInit(){
        this.employeesListService.getSpecialistsList()
        .subscribe((data) => {
            this.specialistList = data;
            this.pageLength = data.length;
            this.cdr.markForCheck();
        })
    }

    ngAfterViewInit(): void {
        this.isRenderEnd = true;
    }

    public nextPage(){
        if(this.selectedPage <= this.pageLength - 1){
            this.selectedPage++;
            this.cdr.markForCheck()
        } else {
            return;
        }    
    }

    public previousPage(){
        if(this.selectedPage > 1){
            this.selectedPage--;
            this.cdr.markForCheck()
        } else {
            return;
        }
    }
}