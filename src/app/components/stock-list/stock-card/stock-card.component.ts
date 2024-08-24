import { Component, Input } from "@angular/core";
import { StockData } from "../../../services/stock/interfaces/stock-data.interface";
import { ModalControllerService, ModalID } from "../../../services/modal/modal-controller.component";

@Component({
    selector: "app-stock-card",
    templateUrl: "./stock-card.component.html",
    styleUrls: ["./stock-card.component.scss"],
})
export class StockCardComponent {
    @Input() card!: StockData;
    ModalID = ModalID;
    constructor(private modalControllerService: ModalControllerService){}

    public openSignUpConsultation(): void {
        this.modalControllerService.openModal(ModalID.consultation)
    }
}