import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from "@angular/core";
import { EmployeesResponse, SpecialistsResponse } from "../../../interfaces/employees.interface";
import { ModalControllerService, ModalID } from "../../../services/modal/modal-controller.component";

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    styleUrls: ['./person-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class PersonCardComponent implements OnChanges, AfterViewInit{
    constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef, private modalControllerService: ModalControllerService){}
    @Input() currentPage: number = 1;
    @Input() specialistList: SpecialistsResponse[] = [];
    @ViewChild('card') card!: ElementRef;
    @ViewChild('image') image!: ElementRef;
    public currentSpecialist!: SpecialistsResponse;
    public isRenderEnd: boolean = false;

    public ngAfterViewInit(): void {
        this.isRenderEnd = true;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if(changes['specialistList']){
            this.currentSpecialist = this.specialistList[0];
        }

        if(changes['currentPage'] && this.card){
            this.renderer.addClass(this.card.nativeElement, 'toggleContentRight');
            this.renderer.addClass(this.image.nativeElement, 'toggleContentLeft');
            setTimeout(() => {
                this.currentSpecialist = this.specialistList[this.currentPage - 1];
                this.cdr.markForCheck();
            }, 200)
            setTimeout(() => {
                this.renderer.removeClass(this.card.nativeElement, 'toggleContentRight');
                this.renderer.removeClass(this.image.nativeElement, 'toggleContentLeft');
            }, 600)
        }
    }

    public openModal(id: number): void {
        this.modalControllerService.openModalWithData(ModalID.consultation, {specialist: id})
    }
}