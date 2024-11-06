import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-prices-page',
    templateUrl: './prices-page.component.html',
    styleUrls: ['./prices-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PricesPageComponent implements OnInit{
    public isMobileDevice: boolean = false;

    constructor(
        private mobileService: MobileService, 
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Цены - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'Узнайте о ценах на стоматологические услуги в нашей клинике. Мы предлагаем широкий спектр оказываемых услуг, с ценами на которые вы можете ознакомиться на этой странице. Нам важно чтобы у Вас остались только положительные впечатления от посещения нашей стоматологической клиники!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, имплантация, цены, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Цены - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Цены на профессиональные стоматологические услуги.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Цены - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Цены на профессиональные стоматологические услуги.' },
          { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
        ]);
    }

    ngOnInit(): void {
        this.mobileService._userDevice$.subscribe((device) => {
            if (device !== 'desktop'){
                this.isMobileDevice = true;
            } else {
                this.isMobileDevice = false;
            }
        })
    }
}