import { Router } from '@angular/router';
import { login } from './../../config/login_details';
import { Component } from '@angular/core';
@Component({
    selector:"landingpage",
    templateUrl:"./landingpage.component.html",
    styleUrls:[]
})

export class LandingpageComponent{
    
    constructor(public Router: Router){}
    user_details = login.details;

    ngOnInit(){

        if(login.islogin==false)
        {
            this.Router.navigate([""])
        }
    }
}