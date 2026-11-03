import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { MobileService } from '../../services/mobile/mobile.service';
import { Meta, Title } from '@angular/platform-browser';
import { DownloaderFileService } from '../../services/file-uloader/file-uploader.service';
import { ModalControllerService, ModalID } from '../../services/modal/modal-controller.component';
import { map, Subject, takeUntil } from 'rxjs';

/** Файл, как он приходит из API */
export interface RawApiFile {
  name: string;      // "Правовая информация::Лицензия на медицинскую деятельность.pdf"
  url: string;
  size?: string;
  icon?: string;
}

/** Файл для отображения в списке документов раздела */
export interface LegalFile {
  name: string;
  size: string;
  url: string;
  icon?: string;
}

export type SectionBlock =
  | { type: 'text'; value: string }
  | { type: 'list'; items: string[] }
  | { type: 'button' };

export interface LegalSection {
  id: number;
  /** Ключ, по которому матчатся файлы из API (левая часть "::") */
  apiKey?: string;
  title: string;
  subtitle: string;
  icon: string;
  /** HTML-контент шапки раздела */
  headerHtml?: string;
  /** Блочный контент раздела (текст / список / кнопка) */
  blocks?: SectionBlock[];
  /** Список файлов для скачивания (разделы 3, 4, 5) */
  files?: LegalFile[];
  /** Признак, что раздел — это статья (раздел 6) */
  isArticle?: boolean;
  /** HTML-контент статьи (раздел 6) */
  articleHtml?: string;
}

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss'],
})
export class InformationPageComponent implements OnInit, OnDestroy {
  public isMobileDevice = false;
  public fileList$ = this.downloaderFileService.getFilelist().pipe(map((data) => data));

  public modalService = inject(ModalControllerService);

  /** Какой раздел раскрыт (null — все свёрнуты) */
  public openSectionId: number | null = null;

  private destroy$ = new Subject<void>();

  public sections: LegalSection[] = [
    {
      id: 1,
      title: 'Налоговый вычет',
      subtitle: 'Как вернуть часть средств за лечение',
      icon: 'assets/icons/debts.svg',
      blocks: [
        {
          type: 'text',
          value:
            'Каждому нашему пациенту мы предоставляем всю документацию для получения налогового вычета в размере 13% от суммы лечения.',
        },
        {
          type: 'text',
          value:
            'Вычет предоставляется работающим гражданам РФ, и производящим уплату подоходного налога. Вычет может быть предоставлен по расходам на лечение не только самого налогоплательщика, но и его супруге (супругу), родителям или детям.',
        },
        {
          type: 'text',
          value:
            'Для получения налогового вычета в налоговую инспекцию необходимо предоставить следующие документы:',
        },
        {
          type: 'list',
          items: [
            'паспорт;',
            'ИНН налогоплательщика;',
            'реквизиты банковского счёта;',
            'копию договора об оказании услуг;',
            'справка об оплате медицинских услуг для представления в налоговые органы Российской Федерации, утвержденной совместным приказом Минздрава России и МНС России от 25.07.2001 № 289/БГ-3-04/256.9 (до 31.12.2023г) либо справка по форме, утвержденной приказом ФНС России от 08.11.2023 № ЕА-7-11/824 (с 01.01.2024г);',
            'лицензию медицинского учреждения, где проходило лечение;',
            'заполнить декларацию по форме 3НДФЛ и сдать ее в НИ в электронном виде либо на бумажном носителе.',
          ],
        },
        {
          type: 'text',
          value:
            'Для получения справки для налоговой инспекции необходимо предоставить следующие документы в клинику:',
        },
        {
          type: 'list',
          items: [
            'копию паспорта;',
            'копию ИНН (налогоплательщика);',
            'копию договора об оказании услуг (восстановим утерянный экземпляр);',
            'заполнить заявление о предоставлении справки в налоговую инспекцию (с обязательным указанием, за кого оформляется вычет: заявитель, супруг(а), сын (дочь), мать(отец)).',
          ],
        },
        { type: 'button' },
        {
          type: 'text',
          value:
            'Срок подготовки до 10 рабочих дней с момента подачи заявления. Статус подготовки справки, можно уточнить по телефону +79130318831',
        },
      ],
    },
    {
      id: 2,
      title: 'Лечение по ДМС',
      subtitle: 'Добровольное медицинское страхование',
      icon: 'assets/icons/dms.svg',
      headerHtml: `
        <p>Клиника работает с ведущими страховыми компаниями по программам
        добровольного медицинского страхования (ДМС).</p>
        <p>Для получения лечения по ДМС необходимо обратиться в свою страховую компанию
        для получения направления (гарантийного письма) и согласовать перечень услуг
        в клинике.</p>
        <p>Уточнить список страховых партнёров и условия можно у администраторов клиники.</p>
      `,
    },
    {
      id: 3,
      apiKey: 'Правовая информация',
      title: 'Правовая информация',
      subtitle: 'Документы, лицензия, персональные данные',
      icon: 'assets/icons/rule.svg',
      headerHtml: `
        <p>Краевой Центр Дентальной Имплантации предоставляет полную правовую информацию
        о своей деятельности. Ниже представлены документы по разделам для скачивания.</p>
      `,
      files: [],
    },
    {
      id: 4,
      apiKey: 'Гос гарантии',
      title: 'Порядок оказания бесплатной и платной стоматологической помощи',
      subtitle: 'Гарантии и программа государственных гарантий',
      icon: 'assets/icons/query.svg',
      headerHtml: `
        <p>ООО «КЦДИ» информирует о том, что все медицинские услуги в нашей клинике
        оказываются платно и в соответствии с требованиями Федерального закона
        «Об основах охраны здоровья граждан в Российской Федерации» от 21 ноября 2011 г. № 323-ФЗ.</p>
        <p>Клиника напоминает о возможности получения гарантированного объёма бесплатной
        медицинской помощи в соответствии с Программой государственных гарантий бесплатного
        оказания гражданам Российской Федерации медицинской помощи и территориальной
        Программой государственных гарантий бесплатного оказания гражданам Российской
        Федерации медицинской помощи в Красноярском крае — в любой медицинской организации,
        участвующей в Программе государственных гарантий.</p>
      `,
      files: [],
    },
    {
      id: 5,
      apiKey: 'Первичная мед информация',
      title: 'Первичная медицинская документация',
      subtitle: 'Договор, согласия, амбулаторная карта',
      icon: 'assets/icons/docs.svg',
      headerHtml: `
        <p>При первом визите пациент или его законный представитель заключает договор
        на оказание платных медицинских услуг, а также подписывает согласие на обработку
        персональных данных и информированное согласие на медицинское вмешательство.
        Кроме того, оформляется амбулаторная карта. Карта является собственностью клиники
        и хранится в регистратуре или архиве.</p>
        <p>Для корректного оформления всех документов пациенту рекомендуется прибыть
        в клинику за 15 минут до начала приёма.</p>
        <p>В случае отказа от подписания договора, согласия на обработку персональных данных
        или согласия на медицинское вмешательство клиника имеет право отказать
        в предоставлении услуг.</p>
        <p>Вы можете заранее ознакомиться с содержанием документов, скачав их с сайта.</p>
      `,
      files: [],
    },
    {
      id: 6,
      title: 'Рекомендации после лечения',
      subtitle: 'Памятка для пациентов',
      icon: 'assets/icons/recomend.svg',
      isArticle: true,
      articleHtml: `
        <p>После стоматологического лечения важно соблюдать рекомендации врача,
        чтобы избежать осложнений и ускорить восстановление.</p>
        <p>В ближайшие часы после лечения рекомендуется воздержаться от приёма пищи
        и горячих напитков, не трогать область вмешательства, соблюдать гигиену полости рта
        по назначению врача.</p>
        <p>При появлении боли, отёка или иных неприятных ощущений необходимо
        незамедлительно связаться с клиникой.</p>
      `,
    },
  ];

  constructor(
    private mobileService: MobileService,
    private title: Title,
    private meta: Meta,
    private downloaderFileService: DownloaderFileService,
  ) {
    this.title.setTitle('Правовая информация - Краевой Центр Дентальной Имплантации');
    this.meta.addTags([
      { name: 'description', content: 'Правовая информация Краевого Центра Дентальной Имплантации: документы, правила оказания услуг, обработка персональных данных и файлы для скачивания.' },
      { name: 'keywords', content: 'стоматология, правовая информация, документы стоматологии, лицензия, персональные данные, стоматология Красноярск' },
      { property: 'og:title', content: 'Правовая информация - Краевой Центр Дентальной Имплантации' },
      { property: 'og:description', content: 'Правовая информация и документы для скачивания стоматологии КЦДИ.' },
      { property: 'og:image', content: 'assets/images/welcome-image-tablet.png' },
      { property: 'og:url', content: 'https://kcdi24.ru/' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Правовая информация - Краевой Центр Дентальной Имплантации' },
      { name: 'twitter:description', content: 'Правовая информация и документы для скачивания стоматологии КЦДИ.' },
      { name: 'twitter:image', content: 'assets/images/welcome-image-tablet.png' },
    ]);
  }

  ngOnInit(): void {
    this.mobileService._userDevice$
      .pipe(takeUntil(this.destroy$))
      .subscribe((device) => {
        this.isMobileDevice = device !== 'desktop';
      });

    // Подписка на файлы из API
    this.fileList$
      .pipe(takeUntil(this.destroy$))
      .subscribe((files) => {
        this.applyFilesToSections(files);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Переключение раздела */
  public toggleSection(id: number): void {
    this.openSectionId = this.openSectionId === id ? null : id;
  }

  public isOpen(id: number): boolean {
    return this.openSectionId === id;
  }

  public trackById(_: number, item: LegalSection): number {
    return item.id;
  }

  public trackByFile(index: number, item: LegalFile): string {
    return `${index}::${item.url}`;
  }

  /** Открытие модалки с формой заявления */
  public showStatementForm(): void {
    this.modalService.openModal(ModalID.statement);
  }

  // ================================================================
  //  ПРИВЯЗКА ФАЙЛОВ ИЗ API К РАЗДЕЛАМ
  // ================================================================

  /**
   * Парсит имена файлов вида "Раздел::Отображаемое название.pdf"
   * и возвращает список пар { sectionKey, file }.
   * Файлы без разделителя "::" игнорируются.
   */
  private parseFiles(files: RawApiFile[]): { sectionKey: string; file: LegalFile }[] {
    const result: { sectionKey: string; file: LegalFile }[] = [];

    for (const f of files) {
      const rawName = f.name ?? '';
      const sepIndex = rawName.indexOf('::');

      if (sepIndex === -1) {
        continue;
      }

      const sectionKey = rawName.slice(0, sepIndex).trim();
      const displayName = rawName.slice(sepIndex + 2).trim();

      if (!sectionKey || !displayName) {
        continue;
      }

      result.push({
        sectionKey,
        file: {
          name: displayName,
          url: f.url,
          size: f.size ?? '',
          icon: f.icon ?? '📄',
        },
      });
    }

    return result;
  }

  /**
   * Группирует файлы по ключу раздела и раскладывает их в sections[].files
   * по совпадению apiKey.
   */
  private applyFilesToSections(files: any): void {
    const byKey = new Map<string, LegalFile[]>();

    for (const { sectionKey, file } of this.parseFiles(files)) {
      const list = byKey.get(sectionKey) ?? [];
      list.push(file);
      byKey.set(sectionKey, list);
    }

    this.sections = this.sections.map((section) => {
      if (!section.apiKey) {
        return section;
      }

      const fromApi = byKey.get(section.apiKey) ?? [];
      return {
        ...section,
        files: fromApi,
      };
    });
  }
}