import { Component, Input } from '@angular/core';
import { IBook } from '../ibook';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
@Input() book!: IBook;
@Input() hideIcons!: boolean;
}
