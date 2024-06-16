import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

products$: Observable<Product[]>;
displayedColumns = ['name', 'category', 'actions']

constructor(private productService: ProductsService, public router:Router) {
  this.products$ = productService.list().pipe();
}

onAdd() {
  this.router.navigate(['/products/new'])
}

}
