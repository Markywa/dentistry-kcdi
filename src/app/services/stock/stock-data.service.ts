import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, of, shareReplay } from 'rxjs';
import { API_CAROUSEL_SPECIALISTS, API_DISCOUNT, API_SPECIALISTS } from '../../../environments/urls';
import { EmployeesResponse, SpecialistsResponse } from '../../interfaces/employees.interface';
import { StockData } from './interfaces/stock-data.interface';

@Injectable({
    providedIn: 'root',
})

export class StockDataService {
    public stockSubscribe$!: Observable<StockData[]>
    constructor(private http: HttpClient) {}
    getStockList(): Observable<StockData[]> {
        return this.stockSubscribe$ ??= this.http.get<StockData[]>(API_DISCOUNT).pipe(shareReplay(1))
    }
}