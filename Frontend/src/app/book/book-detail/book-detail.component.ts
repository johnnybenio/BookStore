import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  imports: [RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
public bookId!: number;

constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bookId = Number(this.route.snapshot.params['id'])

    this.route.params.subscribe(
      (params) => {
        this.bookId = Number(params['id']);
      }
    )
  }

  onSelectNext(){
    this.bookId += 1;
    this.router.navigate(['/book-detail/' + this.bookId])
  }
}
