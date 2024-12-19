import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, of, shareReplay } from 'rxjs';
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
        return this.specialistsList$ ??= this.http.get<SpecialistsResponse[]>(API_CAROUSEL_SPECIALISTS)
        .pipe(
            map((res) => {
                const nameToFind = 'Сафонов Глеб Николаевич';
                
                const found = res.find((name) => {
                    const nameWords = name.name.split(' ');
                    const searchWords = nameToFind.split(' ');
                
                    // Считаем количество совпадающих слов
                    const matches = nameWords.filter(word => searchWords.includes(word)).length;
                
                    // Проверяем, что минимум два слова совпадают
                    return matches >= 2;
                });
                
                if (found) {
                    found.not_a_doctor = true;
                } else {
                    console.error('Объект не найден');
                }
                return res;
            }),
            shareReplay(1));
    }
}