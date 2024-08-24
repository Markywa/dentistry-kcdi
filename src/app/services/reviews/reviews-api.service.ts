import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable, of, shareReplay } from 'rxjs';
import { API_FEEDBACK } from '../../../environments/urls';
import { exportReviewData, ReviewData } from './interfaces/review-data.interface';

@Injectable({
    providedIn: 'root',
})

export class ReviewsApiService {
    public reviewsSubscribe$!: Observable<ReviewData[]>
    constructor(private http: HttpClient) {}
    get(): Observable<ReviewData[]> {
        return this.reviewsSubscribe$ ??= this.http.get<ReviewData[]>(API_FEEDBACK).pipe(shareReplay(1))
    }

    post(review: exportReviewData): Observable<ReviewData[]> {
        return this.http.post<ReviewData[]>(API_FEEDBACK, review).pipe(shareReplay(1))
    }
}