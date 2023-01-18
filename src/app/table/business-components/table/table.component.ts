import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IBook} from "src/app/lib/services/books/interfaces/book.interface";
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

  headers: string[] = ['id','bookName', 'releaseDate', 'description', 'pageCount', 'author', 'Rating'];
  // dataToDisplay: IBook[] = [];
  dataToDisplay  = ELEMENT_DATA
  editBook: IBook | undefined; // the hero currently being edited
  bookName = '';

  constructor(private BookService: BookService) {}


    ngOnInit(){
      // this.getBooks();
  }
    // getBooks(): void {
    //   this.BookService.getBooks().subscribe((Book: IBook[]) => (this.dataToDisplay = Book));
    // }

  // add(name: string): void {
  //   this.editBook = undefined;
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //
  //     const newBook: IBook = { bookName } as IBook;
  //   this.BookService.addBook(newBook)
  //     .subscribe((book) => this.dataToDisplay.push(book));
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

const ELEMENT_DATA: IBook[] = [
  {
    'id': "1",
    'bookName': 'Harry Potter',
    'releaseDate': 'March 19, 2000',
    'description': 'lorem suesh aued huisk deikm.',
    'pageCount': 300,
    'author': "300",
    'Rating': 300,
  }, {
    'id': "2",
    'bookName': 'To Kill a Mockingbird',
    'releaseDate': 'March 18, 2021',
    'description': '15 gallon capacity rolling garden cart',
    'pageCount': 4.2,
    'author': "4.2",
    'Rating': 4.2,
  }
];
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
// performFilter(filterBy: string): IBook[]{
//   filterBy = filterBy.toLowerCase();
//   return this.books.filter((books: IBook) => books.BookName.toLowerCase().includes(filterBy));
//
// }
//
// toggeleImage(): void{
//   this.showImage = !this.showImage;
// }
// ngOnInit(): void {
//   this.books = this.bookService.getBooks()
//   this.filteredBooks = this.books;
//
// }
//
// GetFilterdBooks(): IBook[]{
//   return this.books;
//
//
// }
