import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_FILE_DOWNLOAD, API_FILE_LIST } from '../../../environments/urls';

export interface fileEntity {
  id: number;
  file: string;
  name: string;  
}

@Injectable({
  providedIn: 'root'
})
export class DownloaderFileService {
  constructor(private http: HttpClient) {}

  getFilelist(): Observable<fileEntity[]> {
    return this.http.get<fileEntity[]>(API_FILE_LIST);
  }

  downloadFIle(url: string): Observable<any> {
    url = url.split(':')[0] + 's:' + url.split(':')[1];    
    return this.http.get(url, { responseType: 'blob' });
  }
}