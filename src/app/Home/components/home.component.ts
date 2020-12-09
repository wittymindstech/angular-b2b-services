import { Router } from '@angular/router';
import { HomePageService } from './../services/home.service';
import { Component } from '@angular/core';

 @Component({
     selector:"Home",
     templateUrl:"./home.component.html"
 })

 export class HomeComponent{
     constructor(public service:HomePageService, public Router:Router){}
    public data:any;
     public ngOnInit(){
         this.data=this.service.getdata()
     }
 }