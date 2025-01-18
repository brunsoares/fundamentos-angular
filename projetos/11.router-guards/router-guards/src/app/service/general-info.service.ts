import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneralInfoService {
  private readonly _httpClient = inject(HttpClient);

  getIncidentsDay(): Observable<{ incidents: number }> {
    return this._httpClient.get<{ incidents: number }>(
      'http://localhost:3000/general-info/incidents-day',
      { headers: this.getAccessToken() }
    );
  }

  getPendentPayment(): Observable<{ pendentPayments: number }> {
    return this._httpClient.get<{ pendentPayments: number }>(
      'http://localhost:3000/general-info/pendent-payment',
      { headers: this.getAccessToken() }
    );
  }

  getAccountsCreate(): Observable<{ accountsCreate: number }> {
    return this._httpClient.get<{ accountsCreate: number }>(
      'http://localhost:3000/general-info/accounts-create',
      { headers: this.getAccessToken() }
    );
  }

  getActiveUsers(): Observable<{ activeUsers: number }> {
    return this._httpClient.get<{ activeUsers: number }>(
      'http://localhost:3000/general-info/active-users',
      { headers: this.getAccessToken() }
    );
  }

  private getAccessToken(): HttpHeaders {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('access-token')
    );
    return headers;
  }
}
