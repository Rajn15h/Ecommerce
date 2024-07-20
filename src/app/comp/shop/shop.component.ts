import { Component } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Product } from '../../product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
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
