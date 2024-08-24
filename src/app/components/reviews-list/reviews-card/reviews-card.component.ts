import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ReviewData } from "../../../services/reviews/interfaces/review-data.interface";

@Component({
    selector: 'app-reviews-card',
    templateUrl: './reviews-card.component.html',
    styleUrls: ['./reviews-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ReviewsCardComponent {
   @Input() reviewsCard!: ReviewData;

   get ratingArray(): number[] {
       return new Array(this.reviewsCard.rating);
   }
}