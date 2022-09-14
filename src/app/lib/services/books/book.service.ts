import { Injectable } from '@angular/core';
import { IBook } from './interfaces/book.interface';

@Injectable()
export class BookService {
  public getBooks(): IBook[] {


    return [
      {
        'productId': 1,
        'bookName': 'Harry Potter',
        'productCode': 'HP1',
        'releaseDate': 'March 19, 2000',
        'description': 'lorem suesh aued huisk deikm.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'assets/images/HarryP.jfif'
      }, {
        'productId': 2,
        'bookName': 'To Kill a Mockingbird',
        'productCode': '1',
        'releaseDate': 'March 18, 2021',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'assets/images/s.npg'
      }
    ];
  }
}
