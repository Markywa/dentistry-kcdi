import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from "@angular/core";

@Component({
    selector: 'app-reviews-platform',
    templateUrl: './reviews-platform.component.html',
      styleUrl: './reviews-platform.component.scss'
})

export class ReviewsPlatformComponent implements AfterViewInit {
    @ViewChild('reviews') reviews!: ElementRef<any>;
    @ViewChild('script', { static: true }) script!: ElementRef;
    @ViewChild('select') select!: ElementRef<HTMLElement>;

    ngAfterViewInit(): void {
        this.convertToScript();
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