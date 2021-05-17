import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import restaurants from '../jsonFile/restaurant.json'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public search:string="";
 dish:string="";
total_id:any;
total_price:number=0;
restaurant!:Restaurant;
quantity:number=0;
cartData:Restaurant[]=[];
loginSuccessUser!:string;
  constructor() { 
  }
  public  storeCart(dishId:string):void
  {  
     this.dish=dishId;
     for(let restaurant of restaurants)
        {
          if(restaurant.id == this.dish)
          {
            this.cartData.push(restaurant); 
          this.total_price=restaurant.price+this.total_price;
          console.log("id is"+this.total_price) 
          let key = 'total_price';
          localStorage.setItem(key, this.total_price.toString());
          this.quantity=this.quantity+1;
          let key1 = 'total_quantity';
          localStorage.setItem(key1, this.quantity.toString());
          console.log(this.cartData);
          localStorage.setItem("users", JSON.stringify(this.cartData));
          }         
       }
  }
       public onCartPlus(rest:Restaurant):number{
          for(let rests of restaurants)
            {
                if(rests.id === rest.id)
                {
                  this.quantity++;
                }
            }
            return this.quantity;
          }
  
          public onLoginSuccess(data:string){
            this.loginSuccessUser=data;
          }
          public getLoginSuccess():string{
            return this.loginSuccessUser;
          }
      }