import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { MaskitoOptions } from "@maskito/core";
import mask from "../../../mask";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "../../services/sign-up/sign-up.service";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { SpecialistsResponse } from "../../interfaces/employees.interface";
import { NotificationType } from "../../shared/utils";
import { ModalControllerService, ModalID, ModalType } from "../../services/modal/modal-controller.component";
import { filter } from "rxjs";

@Component({
    selector: 'app-sign-up-consultation',
    templateUrl: './sign-up-consultation.component.html',
    styleUrls: ['./sign-up-consultation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignUpConsultationComponent implements OnInit {
    @Input() alternate: boolean = false;
    @Input() modal: boolean = false;
    @ViewChild('drawer') drawer!: ElementRef;
    @Output() public emitClose = new EventEmitter<ModalType>();

    readonly options: MaskitoOptions = mask;
    public isSend = false;
    public specialistList: SpecialistsResponse[] = [];

    ngOnInit(): void {
        this.employeesListService.getSpecialistsList()
            .subscribe((response) => this.specialistList = response.filter((item) => !item.not_a_doctor));
        this.modalControllerService._data$
            .subscribe((data) => {
                if(!data){
                    return this.clearForm();
                }
                if (data?.specialist) {
                    const selectedSpecialist = this.specialistList.find(s => s.id === data.specialist);
                    if (selectedSpecialist) {
                      data.specialist = selectedSpecialist.id;
                    }
                  }
                this.signUpForm.patchValue(data);                
                this.cdr.markForCheck();
        })
    }

    public signUpForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        phone_number: ['', Validators.minLength(17)],
        client_problem: [''],
        specialist: [''],
        notification_type: [''],
      });

    constructor(
        private fb: FormBuilder,
        private signUpService: SignUpService,
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef,
        private employeesListService: EmployeesListService,
        private modalControllerService: ModalControllerService,
    ) {}


    private clearForm(): void {
        this.signUpForm.reset();
        this.cdr.markForCheck();
    }
    
    public closeModal(): void{
        this.emitClose.emit(ModalID.consultation);
    }

    public sendForm(): void{
        this.signUpForm.patchValue({notification_type: NotificationType.FREE_CONSULTATION})
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
                        if(this.modal){
                            this.emitClose.emit(ModalID.consultation);
                        }
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