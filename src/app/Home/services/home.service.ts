import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})

export class HomePageService{
        constructor(public http:HttpClient){

        }
        public getdata(input_datails):Observable<any>{
            return this.http.post("https://npk-server.herokuapp.com/api/getservice",input_datails)
        }
}