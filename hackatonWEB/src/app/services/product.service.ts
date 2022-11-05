import { Injectable } from '@angular/core';
import { ProductClientService } from '../client/product-client.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productClientService: ProductClientService) { }

  public getProducts(callback: (data: Product[]) => void){
    this.productClientService.getProducts().subscribe(callback);
  };
}
