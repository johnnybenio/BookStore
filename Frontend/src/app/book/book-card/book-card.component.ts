import { Component, Input } from '@angular/core';
import { IBook } from '../ibook';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [RouterModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
@Input() book!: IBook;

}
