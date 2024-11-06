import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-reviews-page',
    templateUrl: './reviews-page.component.html',
    styleUrls: ['./reviews-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ReviewsPageComponent implements OnInit{
    public isMobileDevice: boolean = false;

    constructor(private mobileService: MobileService,
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Отзывы - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице отзывов Краевого Центра Дентальной Имплантации вы найдете мнения наших пациентов о качестве услуг и уровне обслуживания. Узнайте, как наши специалисты помогли вернуть уверенность в улыбке и улучшить здоровье зубов. Читайте реальные истории и делитесь своим опытом, чтобы помочь другим сделать правильный выбор!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, имплантация, отзывы стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Отзывы - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Отзывы на профессиональные стоматологические услуги.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Отзывы - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Отзывы на профессиональные стоматологические услуги.' },
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