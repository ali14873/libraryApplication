import { Injectable } from '@angular/core';
import { ITableConfig } from '../../../table';
import {
  ITableCell,
  ITableCellButton,
  ITableCellImage,
  TableCellType
} from '../../../table/business-components/table/interfaces/table-config.interface';
import { BookService } from '../books/book.service';
import { IBook } from '../books/interfaces/book.interface';

@Injectable()
export class BooksHelper {


  public allbooks: IBook[];

  constructor(private BookService: BookService) {
  }


  public bookToTable(books: Array<IBook>): ITableConfig {
    return {
      headers: ['image', 'productId', 'productCode', 'releaseDate', 'description', 'price', 'starRating'],
      rows: books.map((book: IBook): Array<ITableCell> => {
        return [
          { type: TableCellType.IMAGE, value: book.imageUrl.toString(), altText: 'Book alt text' } as ITableCellImage,
          { type: TableCellType.TEXT, value: book.productId.toString() },
          { type: TableCellType.TEXT, value: book.productCode },
          { type: TableCellType.TEXT, value: book.releaseDate },
          { type: TableCellType.TEXT, value: book.description },
          { type: TableCellType.TEXT, value: book.price.toString() },
          { type: TableCellType.TEXT, value: book.starRating.toString() },
          {
            type: TableCellType.BUTTON, value: {
              text: 'View details',
              action: (): void => {
                console.log('You have clicked', book);
                // TODO: redirect to book
              }
            }
          } as ITableCellButton
        ];
      })
    };
  }

  getbook(id: number): IBook {

    this.allbooks = this.BookService.getBooks();
    // @ts-ignore
    return this.allbooks.find(p => p.productId === id);
  }
}
