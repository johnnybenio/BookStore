import { Component } from '@angular/core';
import { BookListComponent } from "./book/book-list/book-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
