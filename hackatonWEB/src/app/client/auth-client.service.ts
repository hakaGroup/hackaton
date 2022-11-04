import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { TokenResponse } from '../models/token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {

  private baseUrl: string;
  constructor(private httpClient: HttpClient) {

  }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public loginUser(login: Login) {
    return this.httpClient.post<TokenResponse>(`${this.baseUrl}/api/login`, login);
  }

  public islogged(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get(`${this.baseUrl}/api/islogged`, {headers: headers});
  }

  public logout(token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.post(`${this.baseUrl}/api/user/logout`, null, {headers: headers});
  }
}
