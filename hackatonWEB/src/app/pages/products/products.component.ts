import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ProductsComponent implements OnInit {
  dataSource: Product[];
  displayedColumns: string[] = ['#', 'name'];
  displayedColumnsWithExpand: string[] = [...this.displayedColumns, 'expand']
  expandedElement: Product;

  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts(products => {
      this.dataSource = products;
    })
  }
}
