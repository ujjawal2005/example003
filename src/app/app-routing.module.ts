import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomecomponentComponent} from './homecomponent/homecomponent.component';

const routes: Routes = [
  {path: 'home', component: HomecomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
