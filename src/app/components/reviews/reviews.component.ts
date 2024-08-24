import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ReviewsComponent {
    constructor(private modalControllerService: ModalControllerService){}
    ModalID = ModalID
   openSendReviewForm(): void {
    this.modalControllerService.openModal(ModalID.review);
   }
}