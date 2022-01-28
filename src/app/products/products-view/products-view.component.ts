import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsServiceService) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((products) => {
        this.products = products;
          console.log(products);
      });
  }
}
