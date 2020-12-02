import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";
import {todoItem} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {


  message: string = null;
  constructor(private ts: AppServiceService) { }

  ngOnInit() {
  }
  // add a to do item
  addTodo(todo: todoItem) {
    // tslint:disable-next-line:no-shadowed-variable
    this.message = 'add todo success'; // mark a successful add
    this.ts.addTodo(todo).subscribe( );
  }
  // set the massage to null
  addNext() {
    this.message = null;
  }
}
