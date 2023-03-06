import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'],
})

export class BookListItemComponent {
  @Input() book?: Book;
  @Output() selectClickBook = new EventEmitter<Book>();

  doClickSelect(book : Book): void {
    this.selectClickBook.emit(book);
  }
}
