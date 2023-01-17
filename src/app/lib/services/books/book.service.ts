import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from './interfaces/book.interface';
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiI4ZWM3OWIzOC1mODJhLTQ2YTAtYjZkMC0xMWZjMWE3MmRmN2UiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9lMDhiOGRhMC1lMDBhLTQ3ZTgtYjc4OC0wZWUyYjYwYWJlZmYvIiwiaWF0IjoxNjczOTcxNjE0LCJuYmYiOjE2NzM5NzE2MTQsImV4cCI6MTY3Mzk3NTUxNCwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhUQUFBQS9YdlMzMGZQTU9qME05OER6UVJ6UU5aWnFKdWJMcEx1TGZBSGZDM3QxOURMam9ZZm9xZFNFbU5IVXl6bFdSYjYiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiNGMyMWExOTAtMTEyNy00N2FiLTk1MTYtODk3NGM1NjZhNGJlIiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJBZG1pbmlzdHJhdG9yIiwiZ2l2ZW5fbmFtZSI6IlN5c3RlbSIsImlwYWRkciI6IjgwLjYuOTEuMTQ1IiwibmFtZSI6IlN5c0FkbWluIiwib2lkIjoiZmY0Yjc0NDYtMWNlYi00Mjc1LTlhMzYtYWNlMzI4NzA2ZjI1IiwicmgiOiIwLkFVY0FvSTJMNEFyZzZFZTNpQTdpdGdxLV96aWJ4NDRxLUtCR3R0QVJfQnB5MzM1SEFKSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJvTUk1TWtOODdYZmw1WXVDaVhwVDBvMXk5YVgzZGN0alJEMzYzNVdKeTVZIiwidGlkIjoiZTA4YjhkYTAtZTAwYS00N2U4LWI3ODgtMGVlMmI2MGFiZWZmIiwidW5pcXVlX25hbWUiOiJzeXMuYWRtaW5AcGZkZXYub25taWNyb3NvZnQuY29tIiwidXBuIjoic3lzLmFkbWluQHBmZGV2Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IllVYzZUS084X2tpTXhPRUtIWDgyQUEiLCJ2ZXIiOiIxLjAifQ.lYMQF6v_2JZKZ20VO4hMjB0oOSAm-pPSTeFfOrpQt-SxAwAN8r5mZ95gvVrppgU3jOxmWQ59qn25Fm-JopLBBgx62p4lUyywW3jOUrqTHgmYOlrjGriWxI3br2Wh_mR414CLPKdOEFzeZgHn3hP3uyEIljSTB_BQYzu5NGDQiB02FM5vDuCJ2aFy55sxI1XMUq7VJf8PvnuNNo6fr1TnfEjLQiaZ4g9GK6Ojnxc4ulrKC_6NNsR6RzfR8qn_4Oqz75MB5lHpfluqLFToLzwnCI_td7lyZ81Ei6jJXazDsvUTuxsvvqc9Nt38DectK_nVqIeF3G0W3h55GO3Nk5Fi0A'

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
