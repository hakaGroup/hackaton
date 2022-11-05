import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/models/entry';
import { Entry_attribute_values } from 'src/app/models/entry_attr_values';
import { Product } from 'src/app/models/product';
import { FridgeService } from 'src/app/services/fridge.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  fridge: Entry;
  products: Product[];
  selectedProduct: Product;
  constructor (private productService: ProductService,
              private fridgeService: FridgeService) {
    this.fridge = new Entry();
    this.fridge.attribute_values = [];
   }

  ngOnInit(): void {
    this.productService.getProducts(products =>{
      this.products = products
    })
  }

  changeProd() {
    this.selectedProduct.attributes.forEach(element => {
      let attr_val = new Entry_attribute_values();
      attr_val.attribute = element;
      this.fridge.attribute_values.push(attr_val);
    });
  }

  save() {
    this.fridgeService
  }
}
