import { Router } from '@angular/router';
import { HomePageService } from './../services/home.service';
import { Component, Input } from '@angular/core';

 @Component({
     selector:"Homedashboard",
     templateUrl:"./homedashboard.component.html"
 })

 export class HomeDashboardComponent{
    @Input() Data:any;
    constructor(public service:HomePageService, public Router:Router){}
    
    public ngOnInit(){
        this.Data={
            length:0
        }
        console.log(this.Data);
     }
 }