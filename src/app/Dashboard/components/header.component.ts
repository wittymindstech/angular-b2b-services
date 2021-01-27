import { Router } from '@angular/router';
import { login } from './../../config/login_details';
import { Component } from '@angular/core';

@Component({
    selector:"Dashboardheader",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})

export class DashboardheaderComponent{

    constructor(public Router:Router){}
    userdetail=login.details;
    Logout(){

        login.islogin=false;
        login.details={};

        this.Router.navigate([""])
    }
}