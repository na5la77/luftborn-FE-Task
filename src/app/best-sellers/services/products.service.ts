import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
  
 //setting a default value for the limit if not passed to the method
  getProducts(limit: number = 10): Observable<Product[]> {
    let params = new HttpParams().set('limit', limit.toString());
    params = params.set('offset', 20);
    const url = this.baseUrl;

    return this.http.get<Product[]>(url, { params });
  }
}
