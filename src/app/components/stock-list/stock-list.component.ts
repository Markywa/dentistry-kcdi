import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { StockDataService } from "../../services/stock/stock-data.service";
import { StockData } from "../../services/stock/interfaces/stock-data.interface";

@Component({
    selector: "app-stock-list",
    templateUrl: "./stock-list.component.html",
    styleUrls: ["./stock-list.component.scss"],
    
})
export class StockListComponent implements OnInit{
    public stockList: StockData[] = []
    constructor(private stockDataService: StockDataService, private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.stockDataService.getStockList().subscribe((data: StockData[]) => {
            this.stockList = data;
            this.cdr.markForCheck();
        })
    }
}