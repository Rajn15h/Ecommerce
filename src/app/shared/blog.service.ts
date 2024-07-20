import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
baseurl:string='https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush';
constructor(private http:HttpClient) { }
getdatas(){
  return this.http.get(this.baseurl);
}
}
