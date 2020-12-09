import { loginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector:"login",
    templateUrl:"./login.component.html"
})

export class loginComponent{
    constructor(public service:loginService, public Router:Router){}
    public data:any;
     public ngOnInit(){
         this.data=this.service.getdata()
     }
}