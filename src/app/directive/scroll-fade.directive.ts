import { Directive, HostListener, ElementRef, Renderer2, Input, OnInit, AfterViewInit } from '@angular/core';
import { isElementInViewport } from '../shared/utils';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
    @Input() position!: 'left' | 'up' | 'right' | 'down' | 'diagonalLeft' | 'diagonalRight' | 'out';
    @Input() delation: number = 0;
    @Input() isRenderEnd: boolean = false;
 
    ngAfterViewInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'noVisible');
        setTimeout(()=> { 
            // this.isRenderEnd = true
            this.showContent(this.el.nativeElement);
        }, 0)
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showContent(this.el.nativeElement);
    }

    private showContent(element: ElementRef)   {        
        if (isElementInViewport(element) && this.isRenderEnd) {
            switch(this.position) {
                case 'diagonalLeft':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInLeftDiagonal');
                    }, this.delation*1000)
                break;
                case 'up':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInUp');
                    }, this.delation*1000)
                break;
                case 'diagonalRight':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInRightDiagonal');
                    }, this.delation*1000)
                break;
                case 'down':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInDown');
                    }, this.delation*1000)
                break;
                case 'left':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInRight');
                    }, this.delation*1000)
                break;
                case 'right':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideInLeft');
                    }, this.delation*1000)
                break;
                case 'out':
                    setTimeout(() => {
                        this.renderer.addClass(element, 'slideOut');
                    }, this.delation*1000)
                break;
            }
        }
    }
}