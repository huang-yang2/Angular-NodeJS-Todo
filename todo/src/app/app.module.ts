import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListedComponent } from './listed/listed.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListedComponent,
    TodoItemComponent,
    AddPageComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], //也可以在这里加上[AppServiceService] 而不是在service里面写injectable 为root
  bootstrap: [AppComponent]
})
export class AppModule {

}
