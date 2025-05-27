import { Component, inject } from '@angular/core';
import { MobileService } from '../../services/mobile/mobile.service';

@Component({
  selector: 'app-vacancies-page',
  templateUrl: './vacancies-page.component.html',
  styleUrl: './vacancies-page.component.scss'
})
export class VacanciesPageComponent {
  public device$ = inject(MobileService)._userDevice$
}
