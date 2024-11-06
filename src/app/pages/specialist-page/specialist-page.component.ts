import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { EmployeesResponse } from "../../interfaces/employees.interface";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-specialist-page',
    templateUrl: './specialist-page.component.html',
    styleUrls: ['./specialist-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SpecialistPageComponent implements OnInit {
    constructor(
        private employeesListService: EmployeesListService, 
        private cdr: ChangeDetectorRef, 
        private mobileService: MobileService, 
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Специалисты - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице специалистов Краевого Центра Дентальной Имплантации вы познакомитесь с нашей командой опытных врачей, которые обеспечивают высококачественное лечение и заботу о пациентах. Узнайте об их квалификации, опыте и подходе к работе. Мы гордимся нашими специалистами, которые используют современные технологии и индивидуальный подход для достижения наилучших результатов. Доверьте свое здоровье профессионалам!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, Маргарита Баировна, специалисты стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Специалисты - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Специалисты стоматологии.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Специалисты - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Специалисты стоматологии.' },
          { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
        ]);
    }

    public employeesList: EmployeesResponse[] = [];
    public userDevice!: DeviceType;
    ngOnInit(): void {
        this.employeesListService.getEmployeesList()
            .subscribe((data) => {
                this.employeesList = data;
                this.cdr.markForCheck();
        })
        this.mobileService._userDevice$.subscribe((device) => {
            this.userDevice = device;
            this.cdr.markForCheck();
        })
    }
}