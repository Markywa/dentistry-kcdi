import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { DeviceType, MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MainPageComponent implements OnInit, AfterViewInit {
    public isMobile: boolean = true;
    public deviceType!: DeviceType;
    public isRenderEnd: boolean = false;
    public mainPhoto: string = 'assets/images/welcome-image.png';
    constructor(
        private mobileService: MobileService, 
        private cdr: ChangeDetectorRef,
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Главная - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'Стоматология "Краевой Центр Дентальной Имплантации" предлагает высококачественные услуги по имплантации зубов их лечению и реставрации. Наша команда профессионалов использует современные технологии и материалы, чтобы обеспечить надежные и долговечные результаты. Мы заботимся о каждом пациенте, предлагая индивидуальный подход и комфортные условия лечения. Доверьте здоровье своих зубов опытным специалистам и верните себе уверенность в улыбке!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, имплантация, кцди, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Профессиональные стоматологические услуги.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Профессиональные стоматологические услуги.' },
          { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
        ]);
    }

    ngOnInit(): void {
        this.mobileService._userDevice$.subscribe((device) => {
            this.deviceType = device; 
            this.mobileAdaptation(device);
            this.cdr.markForCheck()})
    }

    ngAfterViewInit(): void {
        this.isRenderEnd = true;
    }

    private mobileAdaptation(device: DeviceType): void {
        if(this.deviceType === 'mobile') {
            this.mainPhoto = 'assets/images/welcome-image-mobile.png';
        }
            else if (this.deviceType === 'tablet') {
                this.mainPhoto = 'assets/images/welcome-image-tablet.png';
            } else {
                this.mainPhoto = 'assets/images/welcome-image.png';
            }
}
}