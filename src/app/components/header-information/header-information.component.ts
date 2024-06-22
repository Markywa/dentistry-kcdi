import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { DeviceType } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-header-information',
    templateUrl: './header-information.component.html',
    styleUrls: ['./header-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderInformationComponent {
    @Input() title!: string[];
    @Input() deviceType!: DeviceType;
    @Input() extraView: boolean = false;
    constructor(private contactsService: ContactsService, private cdr: ChangeDetectorRef){}
    public contacts!: ContactsEntity;
    public logo!: string;

    ngOnInit(): void {
        this.contactsService.get().subscribe((response) => this.contacts = response);
    }
}