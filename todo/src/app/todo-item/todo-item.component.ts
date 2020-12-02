import {Component, Input, OnInit} from '@angular/core';
import {Time} from "@angular/common";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: todoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
export class todoItem{
  _id: string;
  title: string;
  description: string;
  dueDate: Date;
  createDate: Date;
  modifiedDate: Date;
  time: string;
  status: boolean;
}
