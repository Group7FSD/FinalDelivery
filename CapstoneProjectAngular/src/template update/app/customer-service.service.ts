import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http : HttpClient) { }
  public doRegistration(customer: any){
    return this.http.post("http://localhost:8080/save-user",customer, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/all-users");
  }

  public getUserByUsername(customername: string){
    return this.http.get("http://localhost:8080/search/"+customername);
  }

  public deleteUser(customername: string){
    return this.http.get("http://localhost:8080/delete/"+customername);
  }
}
