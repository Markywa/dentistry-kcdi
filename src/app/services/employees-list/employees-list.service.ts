import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of, shareReplay } from 'rxjs';
import { API_CAROUSEL_SPECIALISTS, API_SPECIALISTS } from '../../../environments/urls';
import { EmployeesResponse, SpecialistsResponse } from '../../interfaces/employees.interface';

@Injectable({
    providedIn: 'root',
})

export class EmployeesListService {

    constructor(private http: HttpClient) {}
    public employeesList$!: Observable<EmployeesResponse[]>;
    public specialistsList$!: Observable<SpecialistsResponse[]>;

    getEmployeesList(): Observable<EmployeesResponse[]> {
        return this.employeesList$ ??= this.http.get<EmployeesResponse[]>(API_SPECIALISTS).pipe(shareReplay(1));
    }

    getSpecialistsList(): Observable<SpecialistsResponse[]> {
        return this.specialistsList$ ??= this.http.get<SpecialistsResponse[]>(API_CAROUSEL_SPECIALISTS).pipe(shareReplay(1));
    }
}