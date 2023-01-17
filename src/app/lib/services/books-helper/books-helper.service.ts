import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITableConfig } from '../../../table';
import {
  ITableCell,
  ITableCellButton,
  ITableCellImage,
  TableCellType
} from '../../../table/business-components/table/interfaces/table-config.interface';
import { BookService } from '../books/book.service';
import { IBook } from '../books/interfaces/book.interface';
// import {MatTableModule} from '@angular/material/table';


@Injectable()
export class BooksHelper {

  headers: [ 'bookName', 'releaseDate', 'description',  'author', 'starRating'];
  rows: IBook[] = [];
  public allbooks: IBook[];

  constructor(private BookService: BookService,
              private route: ActivatedRoute,
              private router: Router) {
  }






  // public bookToTable(books: Observable<IBook[]>): ITableConfig {
  //   return {
  //     headers: [ 'bookName', 'releaseDate', 'description',  'author', 'starRating'],
  //     rows: books.map((book: IBook): Array<ITableCell> => {
  //       return [
  //         { type: TableCellType.TEXT, value: book.bookName },
  //         { type: TableCellType.TEXT, value: book.releaseDate },
  //         { type: TableCellType.TEXT, value: book.description },
  //         { type: TableCellType.TEXT, value: book.author.toString() },
  //         { type: TableCellType.TEXT, value: book.Rating.toString() },
  //         {
  //           type: TableCellType.BUTTON, value: {
  //             text: 'View details',
  //             action: (): void => {
  //               console.log('You have clicked', book);
  //               // TODO: redirect to book
  //               this.router.navigate(['/books',book.id]);
  //
  //             }
  //           }
  //         } as ITableCellButton
  //       ];
  //     })
  //   };
  // }

  // getbook(id: number): IBook {
  //
  //   this.allbooks = this.BookService.getBooks();
  //   // @ts-ignore
  //   return this.allbooks.find(p => p.productId === id);
  // }
}
