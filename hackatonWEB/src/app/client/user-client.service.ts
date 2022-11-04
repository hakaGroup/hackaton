import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {

  }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public registerUser(register: Register) {
    return this.httpClient.post(`${this.baseUrl}/api/register`, register);
  }
}
