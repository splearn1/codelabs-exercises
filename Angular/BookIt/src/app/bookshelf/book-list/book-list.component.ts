import { Component, EventEmitter, Output } from '@angular/core';
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
        'Book of Testing 1',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
        'Book of Testing 2',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
        'Book of Testing 3',
        'Will Wilder',
        'Mystery',
        'https://source.unsplash.com/50x50/?mystery,book'
    )
  ];

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }

}
