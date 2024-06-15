import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostListener, Input, Renderer2, ViewChild } from "@angular/core";
import { ModalControllerService } from "../../services/modal/modal-controller.component";
import { CallbackComponent } from "../callback/callback.component";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ModalComponent implements AfterContentInit {
   @Input() closable: boolean = true;
   @Input() opened: boolean | null = false;
   @ViewChild('modal') modal!: ElementRef;
   @ContentChild(CallbackComponent, { static: false }) callbackComponent!: CallbackComponent;

   ngAfterContentInit(): void {
    this.callbackComponent.emitClose.subscribe(() => {
        this.closeModal();
      });
   }

   constructor(private modalControllerService: ModalControllerService, private renderer: Renderer2){}

   closeModal(): void {
    this.renderer.addClass(this.modal.nativeElement, 'close-modal'); 
        setTimeout(() => {
            this.modalControllerService.closeModal();
        }, 1000)
   }

//    @HostListener('click', ['$event'])
//    onClick(event: Event) {
//         console.log('inside');
//         this.renderer.addClass(this.modal.nativeElement, 'close-modal'); 
//         setTimeout(() => {
//             this.modalControllerService.closeModal();
//         }, 1000)
//         // 
//         console.log(!this.modal.nativeElement.contains(event.target as Node));
        
//         if (this.modal.nativeElement && !this.modal.nativeElement.contains(event.target as Node)) {
//             console.log('clicked outside');
//         }
//    }
}