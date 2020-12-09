import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})

export class loginService{
    constructor(public http:HttpClient){}

    public getdata(){
        return "Welcome Back, Login to your Account.";
    }
}