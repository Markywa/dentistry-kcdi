import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ReviewsApiService } from "../../services/reviews/reviews-api.service";
import { ReviewData } from "../../services/reviews/interfaces/review-data.interface";
import { ModalControllerService, ModalID } from "../../services/modal/modal-controller.component";

@Component({
    selector: 'app-reviews-list',
    templateUrl: './reviews-list.component.html',
    styleUrls: ['./reviews-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ReviewsListComponent implements OnInit {
    constructor(
        private reviewsApiService: ReviewsApiService, 
        private cdr: ChangeDetectorRef,
        private modalControllerService: ModalControllerService,
    ){}
    public reviewsList: ReviewData[] = [];
    ngOnInit(): void {
        this.reviewsApiService.get().subscribe((data) => {
            this.reviewsList = data;
            this.cdr.markForCheck();
        })
    }

    openSendReviewForm(): void {
        this.modalControllerService.openModal(ModalID.review);
    }
}