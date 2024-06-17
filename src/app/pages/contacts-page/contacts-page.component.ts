import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContactsPageComponent {

}