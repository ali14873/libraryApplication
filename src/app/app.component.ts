import { Component } from '@angular/core';
// import {ITableConfig} from "./table/business-components/table/interfaces/table-config.interface";
// import {BooksHelperService} from "./lib/services/books-helper/books-helper.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibApp';

  // ngOnInit(): void {
  //   let x = BooksHelperService.GetRow();
  //
  // }
  //
  // public books: ITableConfig = {
  //   headers: ['author', 'title', 'title'],
  //
  //   rows: [
  //     ['john doe','harry potter'],
  //     ['john doe 1','harry potter 2'],
  //     ['john doe 12','harry potter 62'],
  //     ['john doe 13','harry potter 52'],
  //   ]
  // }
}
