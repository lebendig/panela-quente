import { NgModule } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  exports: [MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule],
})
export class AppMaterialModule { }
