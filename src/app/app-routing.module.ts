import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  {path: "mainpage", component: MainpageComponent},
  {path: "page2", component: Page2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
