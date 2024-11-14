import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssesmentService {

  private apiUrl = 'https://your-backend-url/api/saveData';

  constructor(private http: HttpClient) {}

  getAssesmentMasterData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
