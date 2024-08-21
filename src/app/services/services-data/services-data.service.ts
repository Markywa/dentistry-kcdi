import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { API_CONTACTS, API_NOTIFICATION, API_SERVICES, API_SPECIALISTS, API_TAKE_SERVICE } from '../../../environments/urls';

export interface ContactsEntity{
    phone_number: string,
    address: string,
    working_hours: string,
    email: string
}

@Injectable({
    providedIn: 'root',
})

export class ServicesDataService {
    private serviceObservable$!: Observable<any>;
    constructor(private http: HttpClient) {}

    getService(id: number): Observable<any> {
        return this.http.get<any>(API_TAKE_SERVICE(id)).pipe(shareReplay(1));
    }

    getServicesList(): Observable<any> {
        return this.serviceObservable$ ??= this.http.get<any>(API_SERVICES).pipe(shareReplay(1));
    }

}