import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public title = 'To Do List';

  constructor(private appService: AppServiceService) { }

  ngOnInit(): void {
  }

  add(): void{
    this.title = `ToDo Item Added!`;
  }

}
