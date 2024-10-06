import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, HostListener, Input, Renderer2, ViewChild } from "@angular/core";
import { ModalControllerService, ModalID, ModalType } from "../../services/modal/modal-controller.component";
import { CallbackComponent } from "../callback/callback.component";
import { SignUpConsultationComponent } from "../sign-up-consultation/sign-up-consultation.component";
import { ReviewsSendComponent } from "../reviews-send/reviews-send.component";
import { StatementFormComponent } from "../statement-form/statement-form.component";

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
   @ContentChild(ReviewsSendComponent, { static: false }) reviewsSendComponent!: ReviewsSendComponent;
   @ContentChild(StatementFormComponent, { static: false }) statementFormComponent!: StatementFormComponent;

   ngAfterContentInit(): void {
    if(this.signUpConsultationComponent){
        this.signUpConsultationComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
          });
    } else if (this.callbackComponent) {
        this.callbackComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
          });
    } else if (this.reviewsSendComponent) {
        this.reviewsSendComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
        })
    } else if(this.statementFormComponent) {
        this.statementFormComponent.emitClose.subscribe((ModalID) => {
            this.closeModal(ModalID);
        })
    }
   }

   constructor(
        private modalControllerService: ModalControllerService, 
        private renderer: Renderer2
    ){}

   closeModal(ModalID: ModalType): void {
    this.renderer.addClass(this.modal.nativeElement, 'close-modal'); 
        setTimeout(() => {
            this.modalControllerService.closeModal(ModalID);
        }, 500)
   }

//    @HostListener('document:click', ['$event'])
//    onDocumentClick(event: MouseEvent): void {
//     const target = event.target as HTMLElement;
//     console.log(target);
    
//     // Проверяем, был ли клик вне модального окна
//     if (this.opened && !this.modal.nativeElement.contains(target)) {
//       this.closeModal(ModalID.callback); // Закрываем модальное окно
//     }
//    }
}