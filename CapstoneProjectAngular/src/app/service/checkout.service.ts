import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(public http:HttpClient) { }
  public checkoutFormPost(purchase:Purchase):Observable<any>{
    console.log("data is",purchase);
    return this.http.post<any>("http://localhost:8085/checkout",purchase)

  }
}
