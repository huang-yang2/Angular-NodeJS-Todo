import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListedComponent} from "./listed/listed.component";
import {AddPageComponent} from "./add-page/add-page.component";


const routes: Routes = [
  {path: '', component: ListedComponent},
  {path: 'add', component: AddPageComponent}
  // {path: ':id', component: TodoDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
