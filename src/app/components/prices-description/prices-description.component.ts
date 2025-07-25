import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { PricesService } from "../../services/prices/prices.service";
import { FileDownloadService } from "../../services/download/download.service";
import { DeviceType } from "../../services/mobile/mobile.service";

@Component({
    selector: 'app-prices-description',
    templateUrl: './prices-description.component.html',
    styleUrls: ['./prices-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class PricesDescriptionComponent implements OnInit {
    @Input() isMobileDevice!: boolean;
   constructor(
    private pricesService: PricesService, 
    private cdr: ChangeDetectorRef, 
    private fileDownloadService: FileDownloadService
){}
   public file!: string;
    ngOnInit(): void {
        this.pricesService.getFilePrices().subscribe((response) => {
            this.file = response;
            this.file = this.file.replace("http://", "https://");            
            this.cdr.markForCheck();
        })  
    }

    downloadPDF(file: string) {
        this.fileDownloadService.downloadFile(file).subscribe(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'Цены.pdf';
            link.click();
            window.URL.revokeObjectURL(link.href); // Освобождаем память
          }, error => {
            console.error('Error downloading the file', error);
          });
    }
}