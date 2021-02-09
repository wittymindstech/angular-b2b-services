import { login } from './../../config/login_details';
import { HttpErrorResponse } from '@angular/common/http';
import { loginService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
declare var $:any;
@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls:['main.css','util.css']
})

export class loginComponent{
    constructor(public service:loginService, public Router:Router){}
    public regexp:any;
    public Email:any;
    public Password:any;
    public result:any="";
    public clicked="no"
     public getlogin(data){

        

        if(data.Email== null || data.Password== null){
            window.alert("Please Enter Correct Values...")
            return
        }

            this.clicked="yes"
         this.service.getlogin(data).subscribe((posRes)=>{

            if(posRes.result!="User not found")
            {
            
                login.islogin=true;
                login.details=posRes[0]
                console.log(login)
                this.Router.navigate(["dashboard"]);
            }
            else{
                this.clicked="no"
                this.result=posRes['result']
                console.log(this.result)
            }
         },(errRes:HttpErrorResponse)=>{

            console.log(errRes)
         })
    
     }

     isemailvalid(email):Boolean{
        console.log(email)
        this.regexp = new RegExp('/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/');
        console.log(this.regexp.test(email))
        return this.regexp.test(email)
    
    }
}