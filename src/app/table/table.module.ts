import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from '../lib/business-components/book-detail/book-detail.component';
import { TableComponent } from './business-components/table/table.component';
import {FormsModule} from "@angular/forms";
import { TableCellComponent } from './business-components/table-cell/table-cell.component';

@NgModule({
  declarations: [
    TableComponent,
    BookDetailComponent,
    TableCellComponent,
  ],
  exports: [
    TableComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule
  ]
})
export class TableModule { }
