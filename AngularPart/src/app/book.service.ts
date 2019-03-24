import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'AngularPart/node_modules/rxjs';
import { Book } from './modeles/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
}
