import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { DeviceType } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-employees-team',
    templateUrl: './employees-team.component.html',
    styleUrls: ['./employees-team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class EmployeesTeamComponent {
    @Input() device!: DeviceType;
}