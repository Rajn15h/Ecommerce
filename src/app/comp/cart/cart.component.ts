import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ApiService } from '../../shared/api.service';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [TableModule,CardModule,TagModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartproduct:Product[]=[];
  totalPrice: number=0;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.product().subscribe(res=>{
      this.cartproduct=res;
    })
    this.api.total().subscribe(total => {
      this.totalPrice = total;
    });
    this.api.exclusive.next(true);  


  }
  removeFromCart(item: any) {
    this.api.removeFromCart(item);
  }

  
  
 
  


 

}
