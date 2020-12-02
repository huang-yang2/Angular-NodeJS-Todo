import { Component } from '@angular/core';
import {AppServiceService} from "./app-service.service";
import {Observable} from "rxjs";
import {todoItem} from "./todo-item/todo-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  add = false;

  //assign the todos in the database to todoList
  todoList: Array<todoItem>;
  constructor(private todoService: AppServiceService ){
    let todos$: Observable<todoItem[]> = todoService.getTodo();
    todos$.subscribe(todos =>{
      this.todoList = todos;
    })
  }
  loadAddPage(){
    this.add = true;
  }
}

