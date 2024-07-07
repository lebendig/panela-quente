import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { first, of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = 'api/products'

  constructor(private httpClient: HttpClient) { }

  findAll(): Product[] {
    return [{_id: '1', name: 'arroz', category: 'grao'},
    {_id: '1', name: 'feijao', category: 'grao'},
    {_id: '1', name: 'banana', category: 'fruta'},
    {_id: '1', name: 'manga', category: 'fruta'},
    {_id: '1', name: 'abobrinha', category: 'legumes'},
    ];
  }

  list() {
    return this.httpClient.get<Product[]>(this.API + "/products")
      .pipe(
        first()
        //map(data => data.foods)
      );
  }

  addNew(product: Product) {
    return this.httpClient.post<Product>(this.API + "/products/new", product)
      .pipe(
        first()
      );
  }

  getCategories() {
    return this.httpClient.get<string[]>((this.API + "/categories"));
  }

  //
  // list(page = 0, pageSize = 10) {
  //   return this.httpClient.get<CoursePage>(this.API, { params: { page, pageSize } })
  //     .pipe(
  //       first(),
  //       //delay(5000),
  //       // tap(courses => console.log(courses))
  //     );
  // }

}

