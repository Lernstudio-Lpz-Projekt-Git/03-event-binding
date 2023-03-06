import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // // book ist vom Interface-Type: Book oder null
  // book: Book | null = null;
  // // book wird null und damit wieder die Liste angezeigt
  // showList() {
  //   this.book = null;
  // }
  // // book bekommt das gesamte Objekt eines Books übegeben
  // showDetails(book: Book) {
  //   this.book = book;
  // }
}
