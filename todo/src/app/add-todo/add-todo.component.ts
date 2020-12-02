import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {todoItem} from "../todo-item/todo-item.component";
import{AppServiceService} from "../app-service.service";
import {ListedComponent} from "../listed/listed.component";
import {Time} from "@angular/common";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;
  text: string;
  dueDate: Date;
  date: Date;
  time:Time;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      description: this.text,
      dueDate: this.dueDate,
      time: this.time,
      createdDate: Date.now(),
      status: false
    };
    this.addTodo.emit(todo);
  }
}
