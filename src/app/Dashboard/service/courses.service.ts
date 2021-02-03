import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})

export class CoursesService{
        constructor(public http:HttpClient){

        }
        public GetCourses():Observable<any>{
            return this.http.get("http://localhost:8080/getallcourses")
        }
}