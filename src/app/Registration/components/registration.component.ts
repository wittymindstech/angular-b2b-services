import { RegisterService } from './../services/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector:"register",
    templateUrl:"./registration.component.html",
    styleUrls:['main.css','util.css']
})

export class registerComponent{
    constructor(public service:RegisterService, public Router:Router){}
    public Name:any;
    public MobileNo:any;
    public Email:any;
    public Password:any;
    public result:any="";

     public getregister(data){
        this.result="";
        if(data.Name==null || data.MobileNo==null || data.Email==null || data.Password==null)
        {
            window.alert("Please Enter Correct Values")
            return
        }
         this.service.checkemail(data).subscribe((posRes)=>{
            if(posRes.result=="User not registered"){
                this.service.getregister(data).subscribe((posRes)=>{
                    this.result=posRes.result;

                },(errRes:HttpErrorResponse)=>{

            console.log(errRes)
                })
            }
            else{
                this.result="Email Id already registered"
            }
            
         },(errRes:HttpErrorResponse)=>{

            console.log(errRes)
         })
     }
}