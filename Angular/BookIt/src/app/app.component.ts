import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookIt';

  pageDisplayed = "bookshelf"

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }
}
