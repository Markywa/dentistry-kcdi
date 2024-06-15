import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-employees-team',
    templateUrl: './employees-team.component.html',
    styleUrls: ['./employees-team.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class EmployeesTeamComponent {
}