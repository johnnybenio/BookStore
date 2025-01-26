import { Routes } from '@angular/router';
import { AddBookComponent } from './book/add-book/add-book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

export const routes: Routes = [
    {path: '', component: BookListComponent},
    {path: 'add-book', component: AddBookComponent},
    {path: 'borrow-book', component: BookListComponent},
    {path: 'book-detail/:id', component: BookDetailComponent},
    {path: 'user/login', component: UserLoginComponent},
    {path: 'user/register', component: UserRegisterComponent},
    {path: '**', component: BookListComponent}
];
