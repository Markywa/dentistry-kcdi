import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { PriceItemEntity, PricesService } from "../../services/prices/prices.service";

@Component({
    selector: 'app-prices',
    templateUrl: './prices.component.html',
    styleUrls: ['./prices.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class PricesComponent implements OnInit {
    constructor(private pricesService: PricesService, private cdr: ChangeDetectorRef){}

    public priceList!: PriceItemEntity[];
   ngOnInit(): void {
    this.pricesService.getPricesList().subscribe((response) => {
        console.log(response);
         this.priceList = response;
        this.cdr.markForCheck();
        });
   }
}