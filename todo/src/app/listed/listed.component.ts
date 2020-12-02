import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppServiceService} from "../app-service.service";
import {todoItem} from "../todo-item/todo-item.component";
import {Time} from "@angular/common";

@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.scss']
})

export class ListedComponent implements OnInit {
  @Input() todoItems: Array<todoItem>;

  todo:todoItem =null;
  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
  }

  updating: boolean = false; //set this property to control the showing of update form

  showDetail(id){
    this.appService.getTodoById(id).subscribe((data) =>{
      // console.log(data);
      this.todo = data;
      console.log(data.createDate);
      this.updating = false;  // set it to false
    })
    // this.appService.getTodo();
  }
  //mark a to do as completed and update it in database
  mark(item: todoItem){
    console.log("marking "+ item.status);
    item.status = !item.status ;
    this.appService.updateTodo(item).subscribe((item) =>{
      console.log("marked" + item.title);
    });
  }
  // delete a todo
  deleteTodo(item: todoItem){
    this.appService.deleteTodo(item).subscribe();
    alert("Deleted " + item.title+". Pls refresh");
  }

  // set these for update method
  title: string;
  description: string;
  dueDate: Date;
  date: Date;
  time: string

  // click the update btn, the update form will show up
  changeUpdate(){
    this.updating = true;
  }

  // update to do from the data gotten from input
  updateTodo(item: todoItem){

    const todoUpdate = {
      _id: item._id,
      status: item.status,
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      createDate: item.createDate,
      modifiedDate: item.modifiedDate,
      time: this.time
    };
    this.appService.updateTodo(todoUpdate).subscribe();
    alert("Updated" + item.title +". Pls refresh");
  }
}
