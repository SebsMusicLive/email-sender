import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:8080/api/send-email';

  constructor(private http: HttpClient) {}

  enviarCorreo(emailData: any): Observable<any> {
    return this.http.post(this.apiUrl, emailData);
  }
}