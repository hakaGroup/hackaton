import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attribute } from 'src/app/models/attribute';
import { Product } from 'src/app/models/product';
import { AttributeService } from 'src/app/services/attribute.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  attributes: Attribute[];
  selectedAttribute: Attribute;
  constructor(private attributeService: AttributeService,
              private productService: ProductService,
              private router: Router) {
    this.product = new Product();
    this.product.attributes = [];
  }

  ngOnInit(): void {
    this.attributeService.getAttributes(data => {
      this.attributes = data;
    });
  }

  addAttribute() {
    if(this.selectedAttribute)
    {
      this.product.attributes.push(this.selectedAttribute);
      this.attributes.splice(this.attributes.indexOf(this.attributes.filter(x => x.id == this.selectedAttribute.id)[0]), 1);
    }
  }

  save(){
    console.log(this.product);
    this.productService.addProduct(this.product, () => {
      this.router.navigate(['/panel/products']);
    });
  }
}
