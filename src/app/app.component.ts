import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../assets/animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation],
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Краевой Центр Дентальной Имплантации');
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
