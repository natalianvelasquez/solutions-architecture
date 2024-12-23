import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  //private apiUrl = 'https://sa-tech-assessment.replit.app/api/assessment/contacts';
  private apiUrl = '/api/assessment/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createContact(contactData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, contactData, { headers });
  }
}
