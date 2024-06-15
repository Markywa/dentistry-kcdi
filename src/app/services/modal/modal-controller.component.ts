import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ModalControllerService {
    private _modal = new BehaviorSubject<boolean>(false);
    public _modal$ = this._modal.asObservable();

    openModal(): void {
        this._modal.next(true);
        document.body.classList.add('modal-open')
    }

    closeModal(): void {
        this._modal.next(false);
        document.body.classList.remove('modal-open')
    }
}