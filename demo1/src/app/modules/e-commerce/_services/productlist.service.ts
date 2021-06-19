import { Inject, Injectable } from '@angular/core';
import { TableService } from '../../../_metronic/shared/crud-table';
import { environment } from '../../../../environments/environment';
import { Product } from '../_models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductlistService{
	private baseUrl: string = '/api';
  constructor(private http:HttpClient) { }

   getAll(): Observable<any>{
   	return this.http.get(`${this.baseUrl}/find`);
   }
  delete(VINCode): Observable<any>{
   	return this.http.delete(`${this.baseUrl}/delete/${VINCode}`);
   }
  add(product: Product): Observable<any> {
    return this.http.post<Product>(`${this.baseUrl}/add`, product, httpOptions);
  }
  update(product: Product): Observable<any>{
    return this.http.post<Product>(`${this.baseUrl}/add`, product, httpOptions);
   }
  getItemById(id): Observable<any>{
    return this.http.get(`${this.baseUrl}/find`);
   }
}
