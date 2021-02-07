import { DashboardheaderComponent } from './header.component';
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
    
    constructor(public Router: Router, public Service: CoursesService, public headcomponent: DashboardheaderComponent){}
    user_details = login.details;
    public data: any;
    public id:never;
    ngOnInit(){

        if(login.islogin==false)
        {
            window.alert("Please Login to continue...");
            this.Router.navigate(["/"])
        }
        this.Service.GetCourses().subscribe((posRes)=>{
            console.log(posRes)
            this.data = posRes;
            console.log(this.data[0]['_id'])
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
    addcart(course)
    {   
        console.log(this.headcomponent.coursesoncart)
        /*this.id=[course.courseid]
        this.headcomponent.coursesoncart.push(this.id)
        this.headcomponent.length=this.headcomponent.length+1;*/
        this.headcomponent.length=this.headcomponent.coursesoncart.push(course.courseid)
        console.log(course.courseid)
        console.log(this.headcomponent.coursesoncart)
        console.log(this.headcomponent.length)
        
    }
}