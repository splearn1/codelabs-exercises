import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';

@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {
  allBooks: Book[] = [
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

}
