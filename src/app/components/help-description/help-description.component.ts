import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-help-description',
    templateUrl: './help-description.component.html',
    styleUrls: ['./help-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class HelpDescriptionComponent {
    public helpDescription: any[] = [
        {
            title: 'Налоговый вычет',
            description: ['Каждому нашему пациенту мы предоставляем всю документацию для получения налогового вычета в размере 13% от суммы лечения.', 'Вычет предоставляется работающим гражданам РФ, и производящим уплату подоходного налога. Вычет может быть предоставлен по расходам на лечение не только самого налогоплательщика, но и его супруге (супругу), родителям или детям.', 'Для получения  налогового вычета в налоговую инспекцию необходимо предоставить следующие документы: паспорт, ИНН налогоплательщика, реквизиты банковского счёта, копию договора об оказании услуг, справка об оплате медицинских услуг для представления в налоговые органы Российской Федерации, утвержденной совместным приказом Минздрава России и МНС России от 25.07.2001 № 289/БГ-3-04/256.9 (до 31.12.2023г) либо справка по форме, утвержденной приказом ФНС России от 08.11.2023 № ЕА-7-11/824@ (с 01.01.2024г), лицензию медицинского учреждения, где проходило лечение, заполнить декларацию по форме 3НДФЛ и сдать ее в НИ в электронном виде либо на бумажном носителе.', 'Для получения справки для налоговой инспекции необходимо предоставить следующие документы в клинику: копию паспорта, копию ИНН (налогоплательщика), копию договора об оказании услуг (восстановим утерянный экземпляр), заполнить заявление о предоставлении справки в налоговую инспекцию (с обязательным указанием, за кого оформляется вычет: заявитель, супруг(а), сын (дочь), мать(отец).', 'А так же вы можете заполнить готовую форму для заявления ниже.', 'Срок подготовки до 10 рабочих дней с момента подачи заявления. Статус подготовки справки, можно уточнить по телефону +79130318831']
        },
        {
            title: 'Лечение по ДМС',
            description: ['Лечение по ДМС в Краевом Центре Дентальной Имплантации- это быстро, качественно и бесплатно для всех, у кого есть страховой полис добровольного медицинского страхования от компании Альфастрахование.', 'Важно: перед посещением стоматолога изучите свою страховую программу и запросите гарантийное письмо у страховой компании на лечение в нашей клинике']
        },
        {
            title: 'Рассрочка',
            description: ['В нашей клинике вы так же можете воспользоваться услугой рассрочки: её можно получить от банка Тинькофф и его банков партнёров. Для оформления рассрочки необходимо придти в клинику заранее: минимум за 4 часа до приема, либо за день до приема. Оформление происходит простым путём: администратор отправляет вам в сообщениях или в мессенджере ссылку на заполнение информации для рассрочки. Вы переходите по ссылке и лично отправляете все данные о себе, заполнение занимает не более 10 минут. Далее мы ждём одобрения от банка и в случае положительного ответа, вы со своей стороны подписываете электронный договор с банком на своём мобильном телефоне.']
        },
    ]
}