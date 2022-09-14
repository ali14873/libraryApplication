import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableModule} from "../table/table.module";
import {LibraryCatalogueComponent} from "./business-components/library/library-catalogue.component";
import { BooksHelper } from './services/books-helper/books-helper.service';
import {BookService} from "./services/books/book.service";

@NgModule({
  declarations: [
    LibraryCatalogueComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  providers: [
    BookService,
    BooksHelper,

  ]
})
export class LibModule {
}
