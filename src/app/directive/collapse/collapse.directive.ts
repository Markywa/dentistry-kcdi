import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {
  @Input() isCollapsed: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setInitialStyles();
  }

  @HostListener('click')
  toggle() {
    this.isCollapsed = !this.isCollapsed;
    const nextElement = this.el.nativeElement.nextElementSibling;
    if (nextElement) {
      if (this.isCollapsed) {
        setTimeout(() => {
            this.renderer.setStyle(nextElement, 'display', 'none');
        }, 300)
      } else {
            this.renderer.removeStyle(nextElement, 'display');
      }
    }
  }

  private setInitialStyles() {
    const nextElement = this.el.nativeElement.nextElementSibling;
    if (nextElement) {
      this.renderer.setStyle(nextElement, 'display', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    }
  }
}