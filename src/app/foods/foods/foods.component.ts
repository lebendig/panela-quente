import { Food } from '../model/food';
import { FoodsModule } from './../foods.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent {

foods: Food[] = [{_id: '1', name: 'arroz', category: 'grao'},
{_id: '1', name: 'feijao', category: 'grao'},
{_id: '1', name: 'banana', category: 'fruta'},
{_id: '1', name: 'manga', category: 'fruta'},
{_id: '1', name: 'abobrinha', category: 'legumes'},
];

displayedColumns = ['name', 'category']

constructor() {
  //this.foods = [];
}

}
