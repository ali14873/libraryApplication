import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import {IBook} from "src/app/lib/services/books/interfaces/book.interface";
import { IApiCollectionResponse } from '../../../api/interfaces/api-response';
import {BookService} from "../../../lib/services/books/book.service";
import {ITableConfig} from "./interfaces/table-config.interface";


@Component({
  selector: 'mhr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // TODO: Learn what is change detection ;p
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  // @Input()
  // public mhrTableConfig: ITableConfig;

   headers: Array<string> = ['id','bookName', 'releaseDate', 'description', 'pageCount', 'author', 'Rating'];
   dataToDisplay: Array<IBook> = [];
   editBook: IBook | undefined;
   name = '';
   releaseDate: string;
   description: string;
   pageCount: number;
   author: string;
   rating: number;
   selectedBookId: number;

  constructor(private _changeDetectorRef: ChangeDetectorRef,private BookService: BookService) {}


    ngOnInit(){
      this.getBooks();
  }
    getBooks(): void {
      this.BookService.getBooks().subscribe((books: Array<IBook>) => {
        this.dataToDisplay = books;
        this._changeDetectorRef.markForCheck();

      });
    }

  add(): void {
    this.editBook = undefined;
    if (!this.name) {
      return;
    }
    const newBook: IBook = {
      name: this.name,
      releaseDate: this.releaseDate,
      description: this.description,
      pageCount: this.pageCount,
      author: this.author,
      rating: this.rating,
    } as IBook;

    this.BookService.addBook(newBook)
      .subscribe((response: IApiCollectionResponse<IBook>) => {
        // @ts-ignore
        this.dataToDisplay.push(response.data.book);
        this._changeDetectorRef.markForCheck();
      });
  }
  deleteBook(id: number): void {
    this.BookService.deleteBook(id).subscribe(() => {
      this.dataToDisplay = this.dataToDisplay.filter((book) => book.id !== id.toString());
    });
  }

  selectedBook: IBook;

  editUpdateBook(book: IBook): void {
    this.selectedBook = book;
  }

  updateSelectedBook(): void {
    this.BookService.updateBook(this.selectedBook).subscribe((updatedBook: IBook) => {
      // update the data in the dataToDisplay array
      const bookIndex = this.dataToDisplay.findIndex(b => b.id === this.selectedBook.id);
      this.dataToDisplay[bookIndex] = updatedBook;
      this._changeDetectorRef.markForCheck();
    });
  }








}

  // search(searchTerm: string) {
  //   this.editHero = undefined;
  //   if (searchTerm) {
  //     this.heroesService
  //       .searchHeroes(searchTerm)
  //       .subscribe((heroes) => (this.heroes = heroes));
  //   } else {
  //     this.getHeroes();
  //   }
  // }
// }

// const ELEMENT_DATA: IBook[] = [
//   {
//     'id': "1",
//     'bookName': 'Harry Potter',
//     'releaseDate': 'March 19, 2000',
//     'description': 'lorem suesh aued huisk deikm.',
//     'pageCount': 300,
//     'author': "300",
//     'Rating': 300,
//   }, {
//     'id': "2",
//     'bookName': 'To Kill a Mockingbird',
//     'releaseDate': 'March 18, 2021',
//     'description': '15 gallon capacity rolling garden cart',
//     'pageCount': 4.2,
//     'author': "4.2",
//     'Rating': 4.2,
//   }
// ];
// const ELEMENT_DATA: IBook[] = [
//
//   {
//     'id': "1",
//     'bookName': 'Harry Potter',
//     'releaseDate': 'March 19, 2000',
//     'description': 'lorem suesh aued huisk deikm.',
//     'price': 19.95,
//     'starRating': 3.2,
//   }, {
//     'id': "2",
//     'bookName': 'To Kill a Mockingbird',
//     'releaseDate': 'March 18, 2021',
//     'description': '15 gallon capacity rolling garden cart',
//     'price': 32.99,
//     'starRating': 4.2,
//   }
// ];



// constructor(private bookService: BookService) {
// }
// public title = 'LibApp';
// public imageWidth: number =50;
// public imageMargin: number= 2;
// public showImage: boolean=false;
//
// private _listFilter: string = '';
//
// get listFilter(): string{
//   return this._listFilter;
// }cd .
//
// set listFilter(value: string){
//   this._listFilter = value;
//   console.log(value)
//   this.filteredBooks = this.performFilter(value)
// }
//
//
// public filteredBooks: IBook[] =[];
// public books: IBook[] =[
// ];
//
