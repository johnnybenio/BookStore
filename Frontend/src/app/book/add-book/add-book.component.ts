import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule
import { TabsetComponent, TabsModule } from 'ngx-bootstrap/tabs';
import { BookCardComponent } from "../book-card/book-card.component";
import { IBook } from '../ibook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  imports: [FormsModule, CommonModule, TabsModule, BookCardComponent],
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('Form') addBookForm!: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  bookView: IBook = {
    Id: 0,
    Name: '',
    Price: 0
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(): void{
    console.log("Form submitted!", this.addBookForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
