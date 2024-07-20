import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Product } from '../../product';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-viewdetail',
  standalone: true,
  imports: [RouterLink,DialogModule],
  templateUrl: './viewdetail.component.html',
  styleUrl: './viewdetail.component.css'
})
export class ViewdetailComponent implements OnInit {
  product!:Product[]|any;
  id:string|null=null
 
  constructor(private route: ActivatedRoute,private api:ApiService){}
 
  ngOnInit(): void {
    this.getProduct();
    this.api.exclusive.next(true);
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getProductById(id).subscribe({
      next: (product) => this.product = product,
      error: (err) => console.error('Failed to load product', err)
      
    });
  }
  goToCart(prod:Product){
    this.api.addToCart(prod);
  }
 
  // exitModal = (): void => {
  //   this.modalRef?.hide();
  // };
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
