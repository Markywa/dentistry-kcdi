import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API_PRICES, API_SPECIALISTS } from '../../../environments/urls';

export interface PriceResponse {
    file: string;
    prices: PriceItemEntity[];
}

export interface PriceItemEntity {
    prices: PriceData[];
    name: string;
}

export interface PriceData {
    name: string;
    price: number;
}

@Injectable({
    providedIn: 'root',
})

export class PricesService {

    constructor(private http: HttpClient) {}

    getPricesList(): Observable<PriceItemEntity[]> {
        return this.http.get<PriceResponse>(API_PRICES).pipe(map(response => response.prices));
    }

    getFilePrices(): Observable<string> {
        return this.http.get<PriceResponse>(API_PRICES).pipe(map(response => response.file));
    }
}