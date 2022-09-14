import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksHelper } from '../../services/books-helper/books-helper.service';
import { BookService } from '../../services/books/book.service';
import { IBook } from '../../services/books/interfaces/book.interface';

@Component({
  selector: 'mhr-book',

  templateUrl: './book-detail.components.html'
})

export class BookDetailComponent implements OnInit{

  book: IBook;
  pagetitle: string;




  constructor(private route: ActivatedRoute,
              private router: Router,

              private BooksHelper: BooksHelper) {
  }

  public ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.getidbook(id);



  }
  getidbook(id: number): void {
    this.book = (this.BooksHelper.getbook(id));

    console.log(this.book);


  }

}
