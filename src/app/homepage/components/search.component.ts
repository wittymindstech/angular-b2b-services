import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchService } from './../services/search.service';
import { Component } from '@angular/core';
@Component({
    selector:"search",
    templateUrl:"./search.component.html",
    styleUrls:['search.component.css']
})

export class SearchComponent{
    constructor(public Service:SearchService,public Route:Router ){}
    public Textdata:any;
    public Category:any;
    public data:any;
    public result:any;
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