import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { slideInAnimation } from "../../../assets/animations";
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styleUrls: ['./layout-page.component.scss'],
    animations: [slideInAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LayoutPageComponent implements OnInit{
    @Input() isSendForm: boolean = true;
    @Input() isVacanciesForm: boolean = false;
    ModalID = ModalID;
    constructor(private modalControllerService: ModalControllerService){
        window.scrollTo(0, 0)
    }

    public isOpen: boolean = false;
    public openModal$ = this.modalControllerService._modal$;
    ngOnInit(): void {
        this.isOpen = true;
    }   
}