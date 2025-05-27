import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-header-information',
    templateUrl: './header-information.component.html',
    styleUrls: ['./header-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderInformationComponent {
    @Input() title!: string[];
    @Input() extraView: boolean = false;
    @Input() showInformation: boolean = false;
    constructor(private contactsService: ContactsService, private cdr: ChangeDetectorRef){}
    deviceType$: Observable<DeviceType> = inject(MobileService)._userDevice$;
    public contacts!: ContactsEntity;
    public logo!: string;

    ngOnInit(): void {
        this.contactsService.get().subscribe((response) => {
            this.contacts = response;
            this.cdr.markForCheck();
        });
    }
}