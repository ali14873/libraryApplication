import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from './interfaces/book.interface';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiI4ZWM3OWIzOC1mODJhLTQ2YTAtYjZkMC0xMWZjMWE3MmRmN2UiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMDhiOGRhMC1lMDBhLTQ3ZTgtYjc4OC0wZWUyYjYwYWJlZmYvIiwiaWF0IjoxNjczODc3ODg4LCJuYmYiOjE2NzM4Nzc4ODgsImV4cCI6MTY3Mzg4MTc4OCwiYWlvIjoiQVRRQXkvOFRBQUFBSVN2QWZ5Zlg5cWtWR2x4dm14bjMvVHdPNmFVMHVxYzU5cEFITVNxOWVQT1RXWndNN1NBc0luMW95T1ZUd0xKbyIsImFtciI6WyJwd2QiXSwiZmFtaWx5X25hbWUiOiJBZG1pbmlzdHJhdG9yIiwiZ2l2ZW5fbmFtZSI6IlN5c3RlbSIsImlwYWRkciI6IjgwLjYuOTEuMTQ1IiwibmFtZSI6IlN5c0FkbWluIiwibm9uY2UiOiJOM2RuWTNWQ2JsUkdVUzAyWWxGcU9URmtRMk5DTFZkQmMyRkJUbmxVTG1KRWFIbGtiRWRDWlVaLVRRIiwib2lkIjoiZmY0Yjc0NDYtMWNlYi00Mjc1LTlhMzYtYWNlMzI4NzA2ZjI1IiwicmgiOiIwLkFVY0FvSTJMNEFyZzZFZTNpQTdpdGdxLV96aWJ4NDRxLUtCR3R0QVJfQnB5MzM1SEFKSS4iLCJzdWIiOiJvTUk1TWtOODdYZmw1WXVDaVhwVDBvMXk5YVgzZGN0alJEMzYzNVdKeTVZIiwidGlkIjoiZTA4YjhkYTAtZTAwYS00N2U4LWI3ODgtMGVlMmI2MGFiZWZmIiwidW5pcXVlX25hbWUiOiJzeXMuYWRtaW5AcGZkZXYub25taWNyb3NvZnQuY29tIiwidXBuIjoic3lzLmFkbWluQHBmZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6Ik9xYmFVN0FDNUVhMklWNVdqMDRpQUEiLCJ2ZXIiOiIxLjAifQ.FgN5juhOfIVUbyCkpO0IATz_kqse5mAC3oXbQpJcR1lTbVFb8becf0DMhAc1b6NKjc_FqxGuGLe2V5y2z6bOu58B3kebLIVRrtzp86j7MlQp7oIvDFAqxJ7H1pixO4motHsqvlUiJBhP2zycTrtfh1sllWI8iady7pWtL69c2zBUPFbXm9rZLmSx6M_7fMuu4WyHHaWyLlzEpVuijN5YxuuOJaAZVkZiSYhWf7bxN0CtOIbliFRLh5xExtetZqaHEe5TYhPKYoETm5tEbKLai5RglJbaZ6v5zFGiIqdPN14Aq2RgyZc8OWjF7BllKa_0BevmQFn_5ER5u0UR6L01iA'

  })
};


@Injectable()
export class BookService {
  constructor(private http: HttpClient) {
  }

  getAllBooksURL = "/api/learning/library/book";  // URL to web api


  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.getAllBooksURL,httpOptions)



  }

  searchBook(searchterm: string): Observable<IBook[]> {
    searchterm = searchterm.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = searchterm ?
      { params: new HttpParams().set('searchterm', searchterm) } : {};

    return this.http.get<IBook[]>(this.getAllBooksURL, options)

  }

  /** POST: add a new hero to the database */
  addBook(book: IBook[]): Observable<IBook> {
    return this.http.post<IBook>(this.getAllBooksURL, book, httpOptions)

  }

  /** DELETE: delete the hero from the server */
  deleteBook(id: number): Observable<unknown> {
    const url = `${this.getAllBooksURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}













//
//   public getBooks(): IBook[] {
//
// //call get all end points using http service replace IBOOK[]// return a promise of IBOOK
//     return [
//       {
//         'productId': 1,
//         'bookName': 'Harry Potter',
//         'productCode': 'HP1',
//         'releaseDate': 'March 19, 2000',
//         'description': 'lorem suesh aued huisk deikm.',
//         'price': 19.95,
//         'starRating': 3.2,
//         'imageUrl': 'assets/images/HarryP.jfif'
//       }, {
//         'productId': 2,
//         'bookName': 'To Kill a Mockingbird',
//         'productCode': '1',
//         'releaseDate': 'March 18, 2021',
//         'description': '15 gallon capacity rolling garden cart',
//         'price': 32.99,
//         'starRating': 4.2,
//         'imageUrl': 'assets/images/s.npg'
//       }
//     ];
//   }
//
