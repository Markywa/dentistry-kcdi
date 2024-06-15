import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_NOTIFICATION, API_SPECIALISTS } from '../../../environments/urls';

@Injectable({
    providedIn: 'root',
})

export class SignUpService {

    constructor(private http: HttpClient) {}

    post(formData: any): Observable<never> {
        return this.http.post<never>(API_NOTIFICATION, formData);
    }
}