import { Observable } from 'rxjs';
import { Food } from '../model/food';
import { FoodsService } from '../services/foods.service';
import { FoodsModule } from './../foods.module';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {

foods$: Observable<Food[]>;
displayedColumns = ['name', 'category', 'actions']

constructor(private foodService: FoodsService, public router:Router) {
  this.foods$ = foodService.list().pipe();
}

onAdd() {
  this.router.navigate(['/foods/new'])
}

}
