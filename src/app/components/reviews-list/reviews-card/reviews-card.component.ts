import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input } from "@angular/core";
import { ReviewData } from "../../../services/reviews/interfaces/review-data.interface";

@Component({
    selector: 'app-reviews-card',
    templateUrl: './reviews-card.component.html',
    styleUrls: ['./reviews-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class ReviewsCardComponent {
   @Input() reviewsCard!: ReviewData;
   private cdr = inject(ChangeDetectorRef);

   get ratingArray(): number[] {
       return new Array(this.reviewsCard.rating);
   }

   isShowAll: boolean = false;

   showAll(): void {
    this.isShowAll = true;
    this.cdr.markForCheck();
   }

   hideAll(): void{ 
    this.isShowAll = false;
    this.cdr.markForCheck();
   }
}