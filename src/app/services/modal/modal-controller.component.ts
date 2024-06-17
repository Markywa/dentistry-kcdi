import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ModalID {
    consultation = 'consultation',
    callback = 'callback',
}

export type ModalType = 'callback' | 'consultation' | '';

@Injectable({
    providedIn: 'root',
})

export class ModalControllerService {
    private _modal = new BehaviorSubject<ModalType>('');
    public _modal$ = this._modal.asObservable();

    openModal(modalID: ModalType): void {
        this._modal.next(modalID);
        document.body.classList.add('modal-open')
    }

    closeModal(modalID: ModalType): void {
        this._modal.next('');
        console.log(modalID);
        
        document.body.classList.remove('modal-open')
    }
}