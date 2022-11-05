import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fridge_entries } from '../models/fridge_entries';

@Injectable({
  providedIn: 'root'
})
export class FridgeClientService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public getEntries() {
    return this.httpClient.get<Fridge_entries[]>(`${this.baseUrl}/api/entry/fridge/get`);
  }
}
