import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})

export class RegisterService{
    constructor(public http:HttpClient){}

    public checkemail(data):Observable<any>{

        return this.http.post("https://npk-server.herokuapp.com/checkemail",data)
    }

    public getregister(data):Observable<any>{

        return this.http.post("https://npk-server.herokuapp.com/register",data)
    }
       
};
