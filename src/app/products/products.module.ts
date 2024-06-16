import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductsComponent } from './products/products.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsFormComponent } from './products-form/products-form.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    MatProgressSpinnerModule
  ]
})
export class ProductsModule { }
