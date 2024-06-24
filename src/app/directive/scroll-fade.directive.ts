import { Directive, HostListener, ElementRef, Renderer2, Input, OnInit, AfterViewInit } from '@angular/core';
import { isElementInViewport } from '../shared/utils';

@Directive({
  selector: '[appScrollFade]'
})
export class ScrollFadeDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
    @Input() position!: 'left' | 'up' | 'right' | 'down' | 'diagonalLeft' | 'diagonalRight' | 'out';
    @Input() delation: number = 0;
 
    ngAfterViewInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'noVisible');
    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isElementInViewport(this.el.nativeElement)) {
        switch(this.position) {
            case 'diagonalLeft':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInLeftDiagonal');
                }, this.delation*1000)
            break;
            case 'up':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInUp');
                }, this.delation*1000)
            break;
            case 'diagonalRight':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInRightDiagonal');
                }, this.delation*1000)
            break;
            case 'down':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInDown');
                }, this.delation*1000)
            break;
            case 'left':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInRight');
                }, this.delation*1000)
            break;
            case 'right':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideInLeft');
                }, this.delation*1000)
            break;
            case 'out':
                setTimeout(() => {
                    this.renderer.addClass(this.el.nativeElement, 'slideOut');
                }, this.delation*1000)
            break;
        }
    }

}
}