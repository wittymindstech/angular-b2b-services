import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})

export class CartService{
        constructor(public http:HttpClient){

        }
        public GetCart(Email_ID):Observable<any>{
            return this.http.post("https://npk-server.herokuapp.com/getcart",Email_ID)
        }

        public GetCourseOnCart(ids):Observable<any>{
            return this.http.post("https://npk-server.herokuapp.com/getcourseoncart",ids)
        }
}