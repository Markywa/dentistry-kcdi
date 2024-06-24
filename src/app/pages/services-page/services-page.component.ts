import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ServicesPageComponent {

}