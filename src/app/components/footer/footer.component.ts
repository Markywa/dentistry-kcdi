import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ContactsEntity, ContactsService } from "../../services/contacts/contacts.service";
import { MobileService } from "../../services/mobile/mobile.service";
import { Router } from "@angular/router";
import { DownloaderFileService } from "../../services/file-uloader/file-uploader.service";
import { map } from "rxjs";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FooterComponent implements OnInit {
    @Input() isSendForm: boolean = true;
    public isMobile: boolean = true;
    public fileList$ = this.downloaderFileService.getFilelist().pipe(map((data) => data));

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
    
    public downloadFile(url: string, name: string): void {
        this.downloaderFileService.downloadFIle(url).subscribe(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = name;
            link.click();
            window.URL.revokeObjectURL(link.href); // Освобождаем память
          }, error => {
            console.error('Error downloading the file', error);
          });
    }

    public naviagate(rout: string[]):void {
        this.router.navigate(rout);
    }
}