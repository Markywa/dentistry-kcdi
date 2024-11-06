import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ContactsPageComponent {
    constructor(  
        private title: Title,
        private meta: Meta
    ){
        this.title.setTitle('Контакты - Краевой Центр Дентальной Имплантации');
        this.meta.addTags([
          { name: 'description', content: 'На странице контактов Краевого Центра Дентальной Имплантации вы найдете всю необходимую информацию для связи с нами. Узнайте адрес нашей клиники, часы работы и способы записи на прием. Мы всегда готовы ответить на ваши вопросы и помочь вам с выбором услуг. Свяжитесь с нами, чтобы получить профессиональную помощь и заботу о здоровье ваших зубов!' },
          { name: 'keywords', content: 'стоматология, лечение зубов, акции стоматологии, специалисты стоматология, стоматологические услуги, стоматология Красноярск' },
          { property: 'og:title', content: 'Контакты - Краевой Центр Дентальной Дмплантации' },
          { property: 'og:description', content: 'Контакты стоматологии КЦДИ.' },
          { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
          { property: 'og:url', content: 'https://kcdi24.ru/' },
          { property: 'og:type', content: 'website' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Контакты - Краевой Центр Дентальной Дмплантации' },
          { name: 'twitter:description', content: 'Контакты стоматологии КЦДИ.' },
          { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
        ]);
    }
}