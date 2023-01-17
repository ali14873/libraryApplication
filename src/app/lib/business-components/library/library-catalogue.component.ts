import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITableConfig } from '../../../table';
import { BooksHelper } from '../../services/books-helper/books-helper.service';
import { BookService } from '../../services/books/book.service';
import { IBook } from '../../services/books/interfaces/book.interface';


@Component({
  selector: 'mhr-library-catalogue',
  templateUrl: './library-catalogue.component.html'
})
export class LibraryCatalogueComponent implements OnInit {
  public title = 'LibApp';
  public table: ITableConfig;

  private readonly _bookService: BookService;
  private readonly _booksHelper: BooksHelper;

  constructor(
    bookService: BookService,
    booksHelper: BooksHelper
  ) {
    this._bookService = bookService;
    this._booksHelper = booksHelper;
  }

  ngOnInit(): void {
    const books: Observable<IBook[]> = this._bookService.getBooks();
    // this.table = this._booksHelper.bookToTable(books);
  }
}
