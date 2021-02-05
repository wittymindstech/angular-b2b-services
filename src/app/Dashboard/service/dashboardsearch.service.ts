import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})

export class DashboardSearchService{
        constructor(public http:HttpClient){

        }
        public GetCourses(input_datails):Observable<any>{
            return this.http.post("https://npk-server.herokuapp.com/search",input_datails)
        }
}