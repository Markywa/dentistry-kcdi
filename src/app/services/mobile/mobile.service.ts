import {Injectable} from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map, Subscription } from 'rxjs';

export type DeviceType = 'desktop' | 'tablet' | 'mobile' | 'unknown';

@Injectable({
    providedIn: 'root',
})

export class MobileService {
    private _userDevice = new BehaviorSubject<DeviceType>('unknown')
    public _userDevice$ = this._userDevice.asObservable();
    private resizeSubscription!: Subscription;

    constructor() {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.checkDevice(windowWidth);
        const resize$ = fromEvent(window, 'resize').pipe(
            debounceTime(250), // Добавляем задержку, чтобы избежать частых вызовов
            map(() => ({
              width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            }))
          );
      
          this.resizeSubscription = resize$.subscribe(size => {
            this.checkDevice(size.width);
          });
    }

    private checkDevice(size: number): void {
        if(size < 768){
            this._userDevice.next('mobile');
        } else if (size >= 768 && size < 1324) {
            this._userDevice.next('tablet');
        } else {
            this._userDevice.next('desktop');
        }
    }
}

