import { Router } from '@angular/router';
import { HomePageService } from './../services/home.service';
import { Component } from '@angular/core';

 @Component({
     selector:"Homedashboard",
     templateUrl:"./homedashboard.component.html"
 })

 export class HomeDashboardComponent{
     constructor(public service:HomePageService, public Router:Router){}
    public data:any;
     public ngOnInit(){
         
     }
 }