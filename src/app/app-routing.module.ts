import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"",loadChildren:()=> import("./Home/model/home.module").then(obj=>obj.homeModule)},
    {path:"login",loadChildren:()=>import("./Login/module/login.module").then(obj=>obj.LoginModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
