import { animate, state, style, transition, trigger } from "@angular/animations";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { PriceItemEntity, PricesService } from "../../services/prices/prices.service";

@Component({
    selector: 'app-collapse-prices',
    templateUrl: './collapse-prices.component.html',
    styleUrls: ['./collapse-prices.component.scss'],
    animations: [
        trigger('collapseExpand', [
          state('collapsed', style({
            height: '0px',
            opacity: 0,
            overflow: 'hidden',
            display: 'none'
          })),
          state('expanded', style({
            height: '*',
            opacity: 1
          })),
          transition('* <=> *', [
            animate('300ms ease-in-out')
          ])
        ])
      ],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class CollapsePricesComponent {
    @Input() price!: PriceItemEntity; 
    public isCollapsed: boolean = true;
}