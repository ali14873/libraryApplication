import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiCollectionResponse, IApiModelResponse } from '../../../api/interfaces/api-response';
import { IBook } from './interfaces/book.interface';
import { map, Observable, of, switchMap, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'EnvironmentCode': 'Ali1',
    'TenantCode': 'nova',
  })
};


@Injectable()
export class BookService {
  private readonly _httpClient: HttpClient;

  constructor(
    private httpClient: HttpClient
  ) {
    this._httpClient = httpClient;

  }

  getAllBooksURL = "/api/learning/library/book";  // URL to web api


  getBooks(): Observable<IBook[]> {
    return this._httpClient.get<IApiCollectionResponse<IBook>>(this.getAllBooksURL,httpOptions)
      .pipe(
        map((response: IApiCollectionResponse<IBook>): Array<IBook> => response.data.book)
      )
  }

  searchBook(searchterm: string): Observable<IBook[]> {
    searchterm = searchterm.trim();

    const options = searchterm ?
      { params: new HttpParams().set('searchterm', searchterm) } : {};

    return this._httpClient.get<IBook[]>(this.getAllBooksURL, options)

  }

  addBook(book: IBook): Observable<IApiCollectionResponse<IBook>> {
    const bookData = {
      book
    };
    return this._httpClient.post<IApiCollectionResponse<IBook>>(this.getAllBooksURL, bookData, httpOptions);
  }


  deleteBook(id: number): Observable<unknown> {
    const url = `${this.getAllBooksURL}/${id}`;
    return this._httpClient.delete(url, httpOptions);
  }

  updateBook(book: IBook): Observable<IBook> {
    const bookData = {
      book: book
    };
    const url = `${this.getAllBooksURL}/${book.id}`;
    return this._httpClient.put<IApiModelResponse<IBook>>(url, bookData, httpOptions).pipe(
      map((response: IApiModelResponse<IBook>): IBook => response.data.book)
    );
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
