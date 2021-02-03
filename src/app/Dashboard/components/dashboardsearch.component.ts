import { DashboardSearchService } from './../service/dashboardsearch.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
    selector:"dashboardsearch",
    templateUrl:"./dashboardsearch.component.html",
    styleUrls:['dashboardsearch.component.css']
})

export class DashboardSearchComponent{
    constructor(public Service:DashboardSearchService,public Route:Router ){}
    public Textdata:any;
    public Category:any;
    public data:any;
    public result={result:''};
    public displayResult:any=false;
    public getCourses(data)
    {
        
        this.Service.GetCourses(data).subscribe((posRes)=>{
            this.result=posRes;
            this.displayResult=true;
            
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes)
        })
    }

}