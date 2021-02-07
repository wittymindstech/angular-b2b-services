import { cart } from './../../config/usercart';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from './../service/cart.service';
import { Component } from '@angular/core';
import { login} from './../../config/login_details'
@Component({
    selector:"cart",
    templateUrl:"./cart.component.html",
    styleUrls:['./cart.component.css']
})

export class CartComponent{
    constructor(public service: CartService){}
    email:any;
    coursesoncart:any;

    ngOnInit(){
        

    }
    
    
};