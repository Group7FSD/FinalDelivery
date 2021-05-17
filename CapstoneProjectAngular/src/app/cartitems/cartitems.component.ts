import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { CartService } from '../service/cart.service';
import restaurantsData from '../jsonFile/restaurant.json';
@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {
restaurants!:Restaurant[];
quantity:number=0;
total_price:any;
  constructor(public cartService:CartService) { 
    this.restaurants=JSON.parse(localStorage.getItem("users") || "[]");
    this.total_price=localStorage.getItem('total_price');
  }

  ngOnInit(): void {
  }
 
}
