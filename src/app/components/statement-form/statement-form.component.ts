import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { ModalID, ModalType } from '../../services/modal/modal-controller.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewsApiService } from '../../services/reviews/reviews-api.service';
import { StatementService } from '../../services/statement/statement.service';
import { combineLatest, fromEvent } from 'rxjs';
import { MaskitoOptions } from '@maskito/core';
import mask from '../../../mask';

@Component({
  selector: 'app-statement-form',
  templateUrl: './statement-form.component.html',
  styleUrl: './statement-form.component.scss'
})
export class StatementFormComponent {
  constructor(
    private fb: FormBuilder, 
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private statementService: StatementService,
) {
}
@Output() public emitClose = new EventEmitter<ModalType>();
@ViewChild('drawer') drawer!: ElementRef;
@ViewChild('dateSelector') dateSelector!: ElementRef;
ModalID = ModalID;
public isSend = false;
public options: MaskitoOptions = mask;

public signUpForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    taxpayer_name: '',
    INN: ['', Validators.required],
    reporting_year: ['', Validators.required],
    issue_type: ['CLINIC', Validators.required],
    phone_number: ['', Validators.minLength(17)],
    email: '',
  });

public changeValidations$ = this.signUpForm.get('issue_type')!.valueChanges.subscribe(value => {
    const emailControl = this.signUpForm.get('email');
    if (value === 'EMAIL') {
      emailControl!.setValidators([Validators.required, Validators.email]);
    } else {
      emailControl!.clearValidators();
    }
    emailControl!.updateValueAndValidity();
  });

public closeModal(): void{
    this.clearForm();
    this.emitClose.emit(ModalID.statement);
}

private clearForm(): void {
    this.signUpForm.reset({
        name: '',
        taxpayer_name: '',
        INN: '',
        reporting_year: '',
        issue_type: 'CLINIC',
        phone_number: '',
        email: '',
      });
    this.cdr.markForCheck();
}

public sendForm(): void{
    if(this.signUpForm.invalid) return;
    this.statementService
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
