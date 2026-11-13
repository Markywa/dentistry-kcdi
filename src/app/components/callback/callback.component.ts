import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from "@angular/core";
import { MaskitoOptions } from "@maskito/core";
import mask from "../../../mask";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "../../services/sign-up/sign-up.service";
import { NotificationType } from "../../shared/utils";
import { ModalControllerService, ModalID, ModalType } from "../../services/modal/modal-controller.component";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { DownloaderFileService } from "../../services/file-uloader/file-uploader.service";

@Component({
    selector: 'app-callback', 
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default, 
})

export class CallbackComponent {
    @ViewChild('drawer') drawer!: ElementRef;
    @Output() public emitClose = new EventEmitter<ModalType>();
    files$ = this.downloadFileService.getFilesByNames$(['Согласие на обработку персональных  данных',
    'Правовая информация::Политика ОПД']);

    readonly options: MaskitoOptions = mask;
    public isSend = false;
    constructor(
        private fb: FormBuilder,
        private signUpService: SignUpService,
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef,
        private modalControllerService: ModalControllerService,
        private downloadFileService: DownloaderFileService
    ) {}

    public signUpForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        phone_number: ['', Validators.minLength(17)],
        notification_type: NotificationType.CALLBACK,
        consent: [false, Validators.requiredTrue],
      });

    private clearForm(): void {
        this.signUpForm.reset({
            name: '',
            phone_number: '',
            notification_type: NotificationType.CALLBACK,
            consent: false,
        });
    }

    public closeModal(): void{
        this.emitClose.emit(ModalID.callback);
    }

      public sendForm(): void{
        this.signUpForm.patchValue({notification_type: NotificationType.CALLBACK})
        if(this.signUpForm.invalid) return;
        this.signUpService
            .post({...this.signUpForm.value})
            .subscribe({
                next: () => {
                    this.isSend = true;
                    this.renderer.addClass(this.drawer.nativeElement, 'up');
                    this.cdr.markForCheck();
                    setTimeout(() => {
                        this.renderer.addClass(this.drawer.nativeElement, 'down');
                        this.renderer.removeClass(this.drawer.nativeElement, 'up');
                        this.clearForm();
                        this.emitClose.emit(ModalID.callback);
                        setTimeout(() => {
                            this.isSend = false;
                            this.renderer.removeClass(this.drawer.nativeElement, 'down');
                            this.cdr.markForCheck();
                        }, 500);
                    }, 3000);
                }
            });
    }
}