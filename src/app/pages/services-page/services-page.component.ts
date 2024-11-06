import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ServicesPageComponent {
    constructor( 
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Услуги - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице услуг Краевого Центра Дентальной Имплантации вы найдете полный список стоматологических процедур, которые мы предлагаем. Мы специализируемся на имплантации зубов, эстетической стоматологии, профилактике и лечении заболеваний полости рта. Узнайте о наших современных методах и технологиях, которые обеспечивают высокое качество лечения и комфорт для пациентов. Позаботьтесь о здоровье своей улыбки с нами!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, акции стоматологии, специалисты стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Услуги - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Услуги стоматологии КЦДИ.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Услуги - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Услуги стоматологии КЦДИ.' },
          { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
        ]);
    }
    public serviceName!: string

    changeServiceName(name: string) {
        this.serviceName = name;
    }
}