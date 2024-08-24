import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from "@angular/core";
import { ModalID, ModalType } from "../../services/modal/modal-controller.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NotificationType } from "../../shared/utils";
import { MaskitoOptions } from "@maskito/core";
import mask from "../../../mask";
import { ReviewsApiService } from "../../services/reviews/reviews-api.service";

@Component({
    selector: 'app-reviews-send',
    templateUrl: './reviews-send.component.html',
    styleUrls: ['./reviews-send.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush, 
})

export class ReviewsSendComponent {
    constructor(
        private fb: FormBuilder, 
        private renderer: Renderer2,
        private reviewsApiService: ReviewsApiService,
        private cdr: ChangeDetectorRef,
    ) {}
    @Output() public emitClose = new EventEmitter<ModalType>();
    @ViewChild('drawer') drawer!: ElementRef;
    ModalID = ModalID;
    public isSend = false;
    public options: MaskitoOptions = mask;

    public signUpForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        phone_number: ['', Validators.minLength(17)],
        feedback: ['', Validators.required],
        rating: [5, [Validators.min(1), Validators.max(5), Validators.pattern('[1-5]')]],
      });

    onRatingInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value.replace(/[^1-5]*/g, '').slice(0, 1);
        this.signUpForm.get('rating')!.setValue(value, { emitEvent: false });
    }

    public closeModal(): void{
        this.emitClose.emit(ModalID.review);
    }

    private clearForm(): void {
        this.signUpForm.reset();
        this.cdr.markForCheck();
    }

    public sendForm(): void{
        if(this.signUpForm.invalid) return;
        this.reviewsApiService
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
                        this.closeModal();
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