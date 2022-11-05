import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attribute } from '../models/attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeClientService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public getAttributes() {
    return this.httpClient.get<any>(`${this.baseUrl}/api/attributes/index`);
  }
}
