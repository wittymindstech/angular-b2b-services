import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:"root"
})

export class HomePageService{
        constructor(public http:HttpClient){

        }
        public data={
            name:"saurabh",
            age:"10"
        }
        public getdata():any{
            return this.data;
        }
}