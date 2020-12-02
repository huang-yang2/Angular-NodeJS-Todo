import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {todoItem} from "./todo-item/todo-item.component";


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  todoList: todoItem[];

  todoUrl = 'http://localhost:3000/todo';
  constructor(private http: HttpClient) { }

  getTodo(): Observable<todoItem[]>{
    return this.http.get<todoItem[]>(this.todoUrl);
  }
  getTodoById(id): Observable<todoItem> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<todoItem>(url);
  }
  // update todo
  updateTodo(todo: todoItem): Observable<any> {
    const url = `${this.todoUrl}/${todo._id}`;
    return this.http.put(url, todo, httpOptions);
  }
  // delete
  deleteTodo(todo: todoItem): Observable<todoItem> {
    const url = `${this.todoUrl}/${todo._id}`;
    return this.http.delete<todoItem>(url, httpOptions);
  }
  // add
  addTodo(todo: todoItem): Observable<todoItem> {
    return this.http.post<todoItem>(this.todoUrl, todo, httpOptions);
  }


}
