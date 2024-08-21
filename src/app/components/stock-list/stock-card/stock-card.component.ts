import { Component, Input } from "@angular/core";
import { StockData } from "../../../services/stock/interfaces/stock-data.interface";

@Component({
    selector: "app-stock-card",
    templateUrl: "./stock-card.component.html",
    styleUrls: ["./stock-card.component.scss"],
})
export class StockCardComponent {
    @Input() card!: StockData;
}