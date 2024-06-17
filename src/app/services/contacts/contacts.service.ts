import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { API_CONTACTS, API_NOTIFICATION, API_SPECIALISTS } from '../../../environments/urls';

export interface ContactsEntity{
    phone_number: string,
    address: string,
    working_hours: string,
    email: string
}

@Injectable({
    providedIn: 'root',
})

export class ContactsService {
    constructor(private http: HttpClient) {}
    private contacts$!: Observable<ContactsEntity>;

    get(): Observable<ContactsEntity> {
        return this.contacts$ ??= this.http.get<ContactsEntity>(API_CONTACTS).pipe(shareReplay(1));
    }
}