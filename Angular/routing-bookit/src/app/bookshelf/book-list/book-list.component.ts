import { Component, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  @Output() currentSelectedBook = new EventEmitter<Book>();

  myBooks: Book[] = [
    new Book(
      'Book of Days',
      'Will Wilder',
      'Mystery',
      'https://clipground.com/images/book-cover-clipart-free-15.jpg'
  ),
  new Book(
      'Book of Nights',
      'Will Wilder',
      'Mystery',
      'https://clipground.com/images/book-cover-clipart-free-15.jpg'
  ),
  new Book(
      'Book of Stars',
      'Will Wilder',
      'Mystery',
      'https://clipground.com/images/book-cover-clipart-free-15.jpg'
  )
];

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }

}
