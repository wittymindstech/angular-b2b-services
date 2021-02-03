import { HttpErrorResponse } from '@angular/common/http';
import { CoursesService } from './../service/courses.service';
import { Router } from '@angular/router';
import { login } from './../../config/login_details';
import { Component, ɵConsole } from '@angular/core';
@Component({
    selector:"landingpage",
    templateUrl:"./landingpage.component.html",
    styleUrls:[]
})

export class LandingpageComponent{
    
    constructor(public Router: Router, public Service: CoursesService){}
    user_details = login.details;
    public data: any;
    ngOnInit(){

        if(login.islogin==false)
        {
            this.Router.navigate(["/"])
        }
        this.Service.GetCourses().subscribe((posRes)=>{
            console.log(posRes)
            this.data = posRes;
            console.log(this.data)
        },(errRes: HttpErrorResponse) => {
                console.log(errRes);
            })
    }
    getdata(){
        this.Service.GetCourses().subscribe((posRes)=>{
            console.log(posRes)
            this.data = posRes;
            console.log(this.data)
        },(errRes: HttpErrorResponse) => {
                console.log(errRes);
            })

    }
}