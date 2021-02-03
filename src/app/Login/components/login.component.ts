import { login } from './../../config/login_details';
import { HttpErrorResponse } from '@angular/common/http';
import { loginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls:['main.css','util.css']
})

export class loginComponent{
    constructor(public service:loginService, public Router:Router){}
    public Email:any;
    public Password:any;
    public result:any="";

     public getlogin(data){

         this.service.getlogin(data).subscribe((posRes)=>{

            if(posRes.result!="User not found")
            {
            
                login.islogin=true;
                login.details=posRes[0]
                console.log(login)
                this.Router.navigate(["dashboard"]);
            }
            else{

                this.result=posRes['result']
                console.log(this.result)
            }
         },(errRes:HttpErrorResponse)=>{

            console.log(errRes)
         })
     }
}