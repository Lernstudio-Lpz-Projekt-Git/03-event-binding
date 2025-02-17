import { Component, EventEmitter, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  bookmode: Book | null = null;
  //@Output() selectClickBook = new EventEmitter<Book>();

  constructor() {
    this.bookmode = null;
    this.books = [
      {
        isbn: '12345',
        title: 'Tierisch gut kochen',
        authors: ['Mrs Chimp', 'Mr Gorilla'],
        published: '2022-06-20',
        subtitle: 'Rezepte von Affe bis Zebra',
        thumbnailUrl: 'https://cdn.ng-buch.de/kochen.png',
        description: 'Immer lecker und gut'
      },
      {
        isbn: '67890',
        title: 'Backen mit Affen',
        authors: ['Orang Utan'],
        published: '2022-07-15',
        subtitle: 'Bananenbrot und mehr',
        thumbnailUrl: 'https://cdn.ng-buch.de/backen.png',
        description: 'Tolle Backtipps für Mensch und Tier'
      }
    ];
  }

  showList() {
    this.bookmode = null;
  }

  showDetails(book: Book) {
    console.log("doSelect-Event:");
    console.log(book);
    this.bookmode = book;
  }

  doSelect(book: Book) {
    console.log("doSelect-Event:");
    console.log(book);
    this.bookmode = book;
    //this.selectBook.emit(book);
  }
}
