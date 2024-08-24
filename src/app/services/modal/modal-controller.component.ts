import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ModalID {
    consultation = 'consultation',
    callback = 'callback',
    review = 'review',
}

export type ModalType = 'callback' | 'consultation' | 'review' | '';

@Injectable({
    providedIn: 'root',
})

export class ModalControllerService {
    private _modal = new BehaviorSubject<ModalType>('');
    public _modal$ = this._modal.asObservable();

    private _data = new BehaviorSubject<any>(null);
    public _data$ = this._data.asObservable();

    openModal(modalID: ModalType): void {
        this._modal.next(modalID);
        document.body.classList.add('modal-open')
    }

    openModalWithData(modalID: ModalType, data: any): void {
        this._data.next(data);
        this._modal.next(modalID);
        document.body.classList.add('modal-open')
    }

    closeModal(modalID: ModalType): void {
        this._data.next(null);
        this._modal.next('');
        document.body.classList.remove('modal-open')
    }
}