import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { Book } from '../shared/book';
import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookListItemComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should trigger an event on clicking the thumbnail', () => {

    let receivedBook: Book | undefined;
    component.selectBook.subscribe(book => {
      receivedBook = book;
    });

    fixture.nativeElement
      .querySelector('img').click();
    expect(receivedBook?.title).toBe('Tierisch gut kochen');
  });
});
