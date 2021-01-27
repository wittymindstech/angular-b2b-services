import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})

export class SearchService{
        constructor(public http:HttpClient){

        }
        public GetCourses(input_datails):Observable<any>{
            return this.http.post("http://localhost:8080/search",input_datails)
        }
}