import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../model/food';
import { first, of, tap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  private readonly API = 'api/foods'

  constructor(private httpClient: HttpClient) { }

  findAll(): Food[] {
    return [{_id: '1', name: 'arroz', category: 'grao'},
    {_id: '1', name: 'feijao', category: 'grao'},
    {_id: '1', name: 'banana', category: 'fruta'},
    {_id: '1', name: 'manga', category: 'fruta'},
    {_id: '1', name: 'abobrinha', category: 'legumes'},
    ];
  }

  list() {
    return this.httpClient.get<Food[]>(this.API)
      .pipe(
        first()
        //map(data => data.foods)
      );
  }
  // list(page = 0, pageSize = 10) {
  //   return this.httpClient.get<CoursePage>(this.API, { params: { page, pageSize } })
  //     .pipe(
  //       first(),
  //       //delay(5000),
  //       // tap(courses => console.log(courses))
  //     );
  // }

}

