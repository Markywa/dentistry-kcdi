import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from "@angular/core";
import { slideInAnimation } from "../../../assets/animations";
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";
import { MobileService } from "../../services/mobile/mobile.service";

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
     showUpButton: boolean = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showUpButton = window.pageYOffset > 300 || 
                           document.documentElement.scrollTop > 300 ||
                           document.body.scrollTop > 300;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    constructor(private modalControllerService: ModalControllerService, private mobileService: MobileService){
        window.scrollTo(0, 0)
    }
    deviceType = this.mobileService._userDevice$;

    public isOpen: boolean = false;
    public openModal$ = this.modalControllerService._modal$;
    ngOnInit(): void {
        this.isOpen = true;
    }   
}