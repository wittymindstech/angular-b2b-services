import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:"first",loadChildren:()=> import("./Home/model/home.module").then(obj=>obj.homeModule)},
    {path:"login",loadChildren:()=>import("./Login/module/login.module").then(obj=>obj.LoginModule)},
    {path:"register",loadChildren:()=>import("./Registration/modules/register.module").then(obj=>obj.RegisterModule)},
    {path:"",loadChildren:()=>import("./homepage/module/homepage.module").then(obj=>obj.HomePageModule)},
    {path:"dashboard",loadChildren:()=>import("./Dashboard/module/dashboard.module").then(obj=>obj.DashboardModule)},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
