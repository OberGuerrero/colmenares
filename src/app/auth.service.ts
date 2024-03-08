import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private baseUrl = 'http://localhost/phpmyadmin/index.php?route=/sql&db=colmenares&table=clientes&pos=0';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_data.php`);
  }

  sendData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/send_data.php`, data);
  }
}

