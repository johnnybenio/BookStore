import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('Form') addBookForm!: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(): void{
    console.log("Form submitted!", this.addBookForm);
  }
}
