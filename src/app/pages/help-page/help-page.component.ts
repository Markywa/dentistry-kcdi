import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MobileService } from "../../services/mobile/mobile.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-help-page',
    templateUrl: './help-page.component.html',
    styleUrls: ['./help-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HelpPageComponent implements OnInit{
    public isMobileDevice: boolean = false;

    constructor(
        private mobileService: MobileService,
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Помощь - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице помощи Краевого Центра Дентальной Имплантации вы найдете полезную информацию о наших услугах, а также ответы на часто задаваемые вопросы. Мы предлагаем поддержку и советы по уходу за зубами, подготовке к процедурам и восстановлению после лечения. Наша цель — обеспечить комфорт и уверенность каждого пациента. Узнайте, как мы можем помочь вам сохранить здоровье вашей улыбки!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, акции стоматологии, специалисты стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Помощь - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Помощь на странице стоматологии КЦДИ.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Помощь - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Помощь на странице стоматологии КЦДИ.' },
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