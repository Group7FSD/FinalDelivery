import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public search:string="";
  constructor() { }
  public  storeData(dish:string):void
  {  console.log("storing data"+dish);
     this.search=dish;
  }
  public getData():string
  {
    return this.search;
  }
}
