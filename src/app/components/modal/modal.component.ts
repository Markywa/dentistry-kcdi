import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostListener, Input, Renderer2, ViewChild } from "@angular/core";
import { ModalControllerService, ModalType } from "../../services/modal/modal-controller.component";
import { CallbackComponent } from "../callback/callback.component";
import { SignUpConsultationComponent } from "../sign-up-consultation/sign-up-consultation.component";

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
   @ContentChild(SignUpConsultationComponent, { static: false }) signUpConsultationComponent!: SignUpConsultationComponent;

   ngAfterContentInit(): void {
    if(this.signUpConsultationComponent){
        this.signUpConsultationComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
          });
    } else if (this.callbackComponent) {
        this.callbackComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
          });
    }
   }

   constructor(private modalControllerService: ModalControllerService, private renderer: Renderer2){}

   closeModal(ModalID: ModalType): void {
    this.renderer.addClass(this.modal.nativeElement, 'close-modal'); 
        setTimeout(() => {
            this.modalControllerService.closeModal(ModalID);
        }, 1000)
   }
}