import { Component, OnInit ,HostListener } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';
import { AuthService } from '../../shared/auth.service';
// import { AuthService } from '../../shared/auth.service';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule,CarouselModule,DropdownModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  product!:Product[]|any;
  displayedData: any[] = [];
  dataIndex = 0;
  itemsPerPage = 8;
  
constructor(private api:ApiService){}

  ngOnInit(): void {
    this.getproduct(); 
    this.api.exclusive.next(true);

  }
 
  getproduct(){
    return this.api.getdata().subscribe((res:any)=>{
      this.product=res?.products;
      // console.log('hello',this.product)
      this.loadMore();




    })
    


  }
  
 
  loadMore() {
    const nextIndex = this.dataIndex + this.itemsPerPage;
    this.displayedData = this.displayedData.concat(this.product.slice(this.dataIndex, nextIndex));
    this.dataIndex = nextIndex;
  }
  showLess() {
    this.dataIndex -= this.itemsPerPage;
    if (this.dataIndex < this.itemsPerPage) {
      this.dataIndex = this.itemsPerPage;
    }
    this.displayedData = this.product.slice(0, this.dataIndex);
  }
  
  goTocart(item:Product){
    this.api.addToCart(item); 
  }
 
  
 
 
 
 



}
