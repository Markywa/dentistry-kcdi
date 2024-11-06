import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-stock-page',
    templateUrl: './stock-page.component.html',
    styleUrls: ['./stock-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StockPageComponent implements OnInit{
    public isMobileDevice: boolean = false;

    constructor(
        private mobileService: MobileService,
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Акции - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице акций Краевого Центра Дентальной Имплантации вы найдете актуальные предложения и специальные скидки на услуги стоматологии. Мы стремимся сделать качественное лечение доступным для каждого пациента. Ознакомьтесь с нашими акциями на имплантацию, профилактические осмотры и другие услуги, чтобы получить максимальную выгоду и заботиться о здоровье своих зубов по выгодной цене!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, акции стоматологии, специалисты стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Акции - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Акции стоматологии.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Акции - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Акции стоматологии.' },
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