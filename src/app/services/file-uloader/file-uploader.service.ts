import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { API_FILE_DOWNLOAD, API_FILE_LIST } from '../../../environments/urls';
import { transformFiles } from './transform-files.transrormer';

export interface FileEntity {
  id: number;
  file: string;
  name: string;  
}

export interface FileEntityTransformed {
  entity: FileEntity[];
  name: string;  
}

@Injectable({
  providedIn: 'root'
})
export class DownloaderFileService {
  constructor(private http: HttpClient) {}

  getFilelist(): Observable<FileEntityTransformed[]> {
    return this.http.get<FileEntity[]>(API_FILE_LIST).pipe(map(res => transformFiles(res)));
  }

  downloadFIle(url: string): Observable<any> {
    url = url.split(':')[0] + 's:' + url.split(':')[1];    
    return this.http.get(url, { responseType: 'blob' });
  }
}