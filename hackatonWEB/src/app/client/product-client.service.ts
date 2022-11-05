import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductClientService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) { }

  public setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  public getProducts() {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/api/product/index`);
  }
}
