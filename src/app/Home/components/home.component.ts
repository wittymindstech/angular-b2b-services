import { Router } from '@angular/router';
import { HomePageService } from './../services/home.service';
import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

 @Component({
     selector:"Home",
     templateUrl:"./home.component.html"
 })

 export class HomeComponent{
    constructor(public service:HomePageService, public Router:Router){}
    public Search:any = "";
    public City:any= "Delhi";   //Default set City
    public data:any;

    public getdata(inputs_details):any{

        this.service.getdata(inputs_details).subscribe((posRes)=>{
            this.data=posRes;
            console.log(this.data)
        },(errRes: HttpErrorResponse)=>{
            console.log(errRes)
        })
    }
    
 }