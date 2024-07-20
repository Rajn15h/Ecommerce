import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  cartItem:number=0;
  exclusive:boolean=false;
  constructor(private api:ApiService,private route:Router,public auth:AuthService) { }
  
  ngOnInit(): void {
    this.api.product().subscribe(res=>{
      this.cartItem=res.length;
      
    })
    this.api.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
  }
  goToHome(){
    this.route.navigate(['home'])
    
    
  }

  // logout() {
  //   this.auth.logout();
  //   this.route.navigate(['login']);
  // }
  

  logout() {
    this.auth.logout();
    this.route.navigate(['']);
  }
 
 
}
