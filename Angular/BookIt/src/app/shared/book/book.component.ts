import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();

  onBookSelected() {
    this.bookSelected.emit();
  }

}
