import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from './../service/cart.service';
import { cart } from './../../config/usercart';
import { Router } from '@angular/router';
import { login } from './../../config/login_details';
import { Component } from '@angular/core';

@Component({
    selector:"Dashboardheader",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class DashboardheaderComponent{

    constructor(public Router:Router, public service: CartService){}
    userdetail=login.details;
    coursesoncart=[];
    length:any;
    email:any;
    ngOnInit()
    {
        this.email=login.details['Email_ID']
        this.getcourseoncart()
    }
    
    
    Logout(){
        if(window.confirm("Are you sure to want to Logout?")){
        login.islogin=false;
        login.details={};
        this.Router.navigate([""])}
    }

    getcourseoncart(){
        this.service.GetCart(this.email).subscribe((posres)=>{

            this.coursesoncart=posres[0].cart;
            cart.courses=posres[0].cart;
            console.log(this.coursesoncart)
            cart.length=this.coursesoncart.length;
            this.length=this.coursesoncart.length
            console.log(cart.length)

        },(errRes: HttpErrorResponse)=>{
            console.log(errRes)
        })
    }
}