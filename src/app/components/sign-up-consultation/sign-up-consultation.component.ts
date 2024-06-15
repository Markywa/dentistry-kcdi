import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";
import { MaskitoOptions } from "@maskito/core";
import mask from "../../../mask";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SignUpService } from "../../services/sign-up/sign-up.service";
import { EmployeesListService } from "../../services/employees-list/employees-list.service";
import { SpecialistsResponse } from "../../interfaces/employees.interface";
import { NotificationType } from "../../shared/utils";

@Component({
    selector: 'app-sign-up-consultation',
    templateUrl: './sign-up-consultation.component.html',
    styleUrls: ['./sign-up-consultation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignUpConsultationComponent implements OnInit {
    @Input() alternate: boolean = false;
    @ViewChild('drawer') drawer!: ElementRef;
    readonly options: MaskitoOptions = mask;
    public isSend = false;
    public specialistList: SpecialistsResponse[] = [];

    ngOnInit(): void {
        this.employeesListService.getSpecialistsList()
            .subscribe((response) => this.specialistList = response);
    }

    public signUpForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        phone_number: ['', Validators.minLength(17)],
        client_problem: [''],
        specialist: [''],
        notification_type: NotificationType.FREE_CONSULTATION,
      });

    constructor(
        private fb: FormBuilder,
        private signUpService: SignUpService,
        private renderer: Renderer2,
        private cdr: ChangeDetectorRef,
        private employeesListService: EmployeesListService
    ) {}

    private clearForm(): void {
        this.signUpForm.reset();
    }
    
    public sendForm(): void{
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