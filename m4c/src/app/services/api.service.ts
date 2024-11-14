import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://your-backend-url/api/saveData';

  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
