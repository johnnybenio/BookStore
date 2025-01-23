import { Routes } from '@angular/router';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [
    {path: '', component: BookListComponent},
    {path: 'add-book', component: AddBookComponent},
    {path: 'borrow-book', component: BookListComponent},
    {path: 'book-detail/:id', component: BookDetailComponent},
    {path: '**', component: BookListComponent}
];
