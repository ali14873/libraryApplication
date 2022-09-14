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
export class TableComponent {
  @Input()
  public mhrTableConfig: ITableConfig;

}




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
// }
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
