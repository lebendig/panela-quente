import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent {

  category = '';
  name = "";
  categories: string[] = [];
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService ){
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.productService.getCategories().subscribe(
      (data: string[]) => {
        this.categories = data;
      },
      error => {
        console.error('Erro ao buscar categorias', error);
      }
    );
  }

   addNewProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productService.addNew(newProduct).subscribe((product: Product) => {
        this.productForm.reset();
      });
    }

  }

}
