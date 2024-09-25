import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-reviews-carousel',
    templateUrl: './reviews-carousel.component.html',
    styleUrls: ['./reviews-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ReviewsCarouselComponent implements AfterViewInit {
    @ViewChild('script', { static: true }) script!: ElementRef;
    public isRenderEnd: boolean = false;

    ngAfterViewInit(): void {
        this.convertToScript();
        this.isRenderEnd = true;
        // console.log(this.select.nativeElement.children);
        // setTimeout(() => {
            
        // console.log(document.querySelectorAll('review-lab')['0'].innerHTML);
        // }, 2000)      
        
    }

    convertToScript() {
        const element = this.script.nativeElement;
        const script = document.createElement('script');
        script.src = 'https://app.reviewlab.ru/widget/index-es2015.js';
        script.defer = true;
        element.parentElement.replaceChild(script, element);
      }
}