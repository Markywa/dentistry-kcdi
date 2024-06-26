import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { MobileService } from "../../services/mobile/mobile.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FooterComponent implements OnInit {
    @Input() isSendForm: boolean = true;
    public isMobile: boolean = true;
    constructor(
        private contactsService: ContactsService, 
        private mobileService: MobileService, 
        private cdr: ChangeDetectorRef,
        private router: Router
    ){}
    public contacts!: ContactsEntity;
    ngOnInit(): void {
        this.contactsService.get().subscribe((data) => this.contacts = data);
        this.mobileService._userDevice$.subscribe((data) => {
            this.isMobile = data === 'mobile';
            this.cdr.markForCheck();
        }
    );
    }

    public naviagate(rout: string[]):void {
        this.router.navigate(rout);
    }
}