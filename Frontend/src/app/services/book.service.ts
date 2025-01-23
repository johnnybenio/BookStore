import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IBook } from '../book/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAllBooks(SellBorrow: number): Observable<IBook[]> {
    return this.http.get('data/books.json').pipe(
      map((data : any)=> {
        const booksArray: Array<IBook> = [];

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellBorrow === SellBorrow){
            booksArray.push(data[id]);
          }
        }
        return booksArray;

      })
    )
  }
}
