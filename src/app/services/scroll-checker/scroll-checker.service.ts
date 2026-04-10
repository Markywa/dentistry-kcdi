import {Injectable, NgZone} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ScrollCheckerService {
    private scrollSubject = new Subject<'start' | 'reset'>(); 
    public scroll$ = this.scrollSubject.asObservable();

    private isScrolling = false; 

    constructor(private ngZone: NgZone) {
        this.initScrollListener();
    }

    private initScrollListener(): void {
        this.ngZone.runOutsideAngular(() => {
            window.addEventListener('scroll', this.onScroll.bind(this));
        });
    }

    private onScroll(): void {
        if (!this.isScrolling && window.scrollY > 0) {
            this.isScrolling = true;
            this.scrollSubject.next('start'); 

            window.removeEventListener('scroll', this.onScroll.bind(this));
        }

        if (this.isScrolling && window.scrollY === 0) {
            this.isScrolling = false;
            this.scrollSubject.next('reset'); 
            this.initScrollListener();
        }
    }
}