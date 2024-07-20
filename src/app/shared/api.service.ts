import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productitem = new BehaviorSubject<any>([]);
  private productlist:any=[];
  private totalPrice = new BehaviorSubject<number>(0);
  exclusive=new Subject<boolean>();

baseurl:string="http://dummyjson.com/products";
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(this.baseurl);
  }
  getProductById(id: number){
    return this.http.get(`${this.baseurl}/${id}`);
  }
  addToCart(productdata:any){
    this.productlist.push(productdata);
    this.productitem.next(this.productlist);
    this.calculateTotalPrice();

  }
  removeFromCart(item: any) {
    const index = this.productlist.findIndex((productlist: { id: any; }) => productlist.id === item.id);
    if (index > -1) {
      this.productlist.splice(index, 1);
      this.productitem.next([...this.productlist]);
      this.calculateTotalPrice();

    }
   
  }
  product(){
    return this.productitem.asObservable();
  }
  total() {
    return this.totalPrice.asObservable();
  }
  private calculateTotalPrice() {
    const total = this.productlist.reduce((sum: any, item:any) => sum + item.price, 0);
    this.totalPrice.next(total);
  }



 

}
