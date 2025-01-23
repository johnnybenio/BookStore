import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { BookCardComponent } from "../book-card/book-card.component";
import { BookService } from '../../services/book.service';
import { IBook } from '../ibook';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule, BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books!: Array<IBook>;
  SellBorrow = 1;

  constructor(private route: ActivatedRoute, private bookService: BookService){}

  ngOnInit(): void {

    if(this.route.snapshot.url.toString()){
      this.SellBorrow = 2;
    }

    this.bookService.getAllBooks(this.SellBorrow).subscribe({
      next: (data) => {
        this.books = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      },
      error: (err) => {
        console.error('HTTP Error: ', err);
      },
      complete: () => {
        console.log('Book fetching completed.');
      },
    });    
  }
}
