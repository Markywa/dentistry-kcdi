import { trigger, transition, style, animate,query, animateChild, } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
    transition('* <=> *', [
      style({ opacity: 0 }),
      animate('1s', style({ opacity: 1 }))
    ])
  ])