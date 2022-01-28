import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/products`);
  }

  createProduct() {
    return this.httpClient.post<Product>(`${environment.apiUrl}/product`, Product);
  }
}
