import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";
import { combineLatest, Subscription } from "rxjs";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { ServicesDataService } from "../../services/services-data/services-data.service";

class Button {
    constructor(public name: string, public isActive: boolean, public link: string[] | null, public showExtras: boolean) {}
  }
  
class ButtonFactory {
    static createButtons(buttonData: { name: string, isActive: boolean, link: string[] | null, showExtras: boolean }[]): Button[] {
        return buttonData.map(data => new Button(data.name, data.isActive, data.link, data.showExtras));
    }
}

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TopMenuComponent implements OnInit, OnDestroy {
    private sizeSubscription!: Subscription;
    public deviceType!: DeviceType;
    public isMenuOpen: boolean = false;
    public contacts!: ContactsEntity;
    public extras: any[] = [];
    public extrasShow: boolean = false;
    constructor(
        private router: Router, 
        private modalControllerService: ModalControllerService,
        private mobileService: MobileService,
        private cdr: ChangeDetectorRef,
        private contactsService: ContactsService,
        private servicesDataService: ServicesDataService
    ){}
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    toggleExtras() {
        this.extrasShow = !this.extrasShow;
    }

    public routToService(id: number): void {
        this.extrasShow = false;
        this.router.navigate(['services', id]);
    }

    ngOnInit(): void {
        this.sizeSubscription = this.mobileService._userDevice$.subscribe((device) => {
            this.deviceType = device;
            this.cdr.markForCheck();
        })
        this.contactsService.get().subscribe((contacts) => {
            this.contacts = contacts;
            this.cdr.markForCheck();
        })
        this.servicesDataService.getServicesList()
            .subscribe((data) => {
                this.extras = data;
                this.cdr.markForCheck();
            });
    }
    ngOnDestroy(): void {
        this.sizeSubscription.unsubscribe();
    }

    private buttonData = [
        { name: 'Главная', isActive: this.router.url.includes('main'), link: ['/main'], showExtras: false },
        { name: 'Услуги', isActive: this.router.url.includes('services'), link: null, showExtras: true },
        { name: 'Цены', isActive: this.router.url.includes('prices'), link: ['/prices'], showExtras: false },
        { name: 'Специалисты', isActive: this.router.url.includes('specialist'), link: ['/specialist'], showExtras: false },
        // { name: 'Акции', isActive: this.router.url.includes('stock'), link: ['/stock'] },
        // { name: 'Отзывы', isActive: this.router.url.includes('reviews'), link: ['/reviews'] },
        { name: 'Контакты', isActive: this.router.url.includes('contacts'), link: ['/contacts'], showExtras: false },
    ];

    changeSelected(item: Button): void {
        this.buttons.forEach((button) => button.isActive = false);
        item.isActive = true;
    }

    public buttons = ButtonFactory.createButtons(this.buttonData);

    public openCallbackModal(): void {
        this.modalControllerService.openModal(ModalID.callback)
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        const targetElement = event.target as HTMLElement;
        if (this.isMenuOpen && targetElement.childElementCount === 1) {
            this.isMenuOpen = false;
            this.cdr.markForCheck()
        }
    }
}