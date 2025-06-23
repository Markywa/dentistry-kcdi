import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { MobileService } from "../../services/mobile/mobile.service";
import { Router } from "@angular/router";
import { DownloaderFileService, FileEntityTransformed } from "../../services/file-uloader/file-uploader.service";
import { map } from "rxjs";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FooterComponent implements OnInit {
    @Input() isSendForm: boolean = true;
    @Input() isVacanciesForm: boolean = false;
    public isMobile: boolean = true;
    public fileList$ = this.downloaderFileService.getFilelist().pipe(map((data) => data));
    public isShowSendForm = false;

    constructor(
        private contactsService: ContactsService, 
        private mobileService: MobileService, 
        private cdr: ChangeDetectorRef,
        private router: Router,
        private downloaderFileService: DownloaderFileService
    ){}
    public contacts!: ContactsEntity;
    ngOnInit(): void {
        this.contactsService.get().subscribe((data) => this.contacts = data);
        this.mobileService._userDevice$.subscribe((data) => {
            this.isMobile = data === 'mobile';
            this.cdr.markForCheck();
        }
    );
    }

    public showSendForm(): void {
        if(this.isShowSendForm){
            this.isShowSendForm = false;
        } else {
            this.isShowSendForm = true;
        }
    }

    public openWhatsApp(): void {
        window.open('https://wa.me/79130318831?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%20', '_blank')
    }
    
    public downloadFile(file: FileEntityTransformed): void {
        file.entity.forEach(element => {
            this.downloaderFileService.downloadFIle(element.file).subscribe(blob => {
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = element.name;
                link.click();
                window.URL.revokeObjectURL(link.href);
              }, error => {
                console.error('Error downloading the file', error);
              });
        })
    }

    public naviagate(rout: string[]):void {
        this.router.navigate(rout);
    }
}