import { Inject, Injectable } from '@angular/core';
import { TableService } from '../../../_metronic/shared/crud-table';
import { environment } from '../../../../environments/environment';
import { Product } from '../_models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{

  constructor(private http:HttpClient) { }

   getAll(): Observable<any>{
   	return this.http.get(baseUrl + '/find');
   }
  
}
