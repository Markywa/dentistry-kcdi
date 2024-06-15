import { ChangeDetectionStrategy, Component } from "@angular/core";
import { slideInAnimation } from "../../../assets/animations";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-specialist-page',
    templateUrl: './specialist-page.component.html',
    styleUrls: ['./specialist-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpecialistPageComponent {
}