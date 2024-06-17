import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";

@Component({
    selector: 'app-header-information',
    templateUrl: './header-information.component.html',
    styleUrls: ['./header-information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HeaderInformationComponent {
    @Input() title!: string;
    constructor(private contactsService: ContactsService){}
    public contacts!: ContactsEntity;

    ngOnInit(): void {
        this.contactsService.get().subscribe((response) => this.contacts = response);
    }
}