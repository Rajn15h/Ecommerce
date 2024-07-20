import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HeaderComponent } from "./comp/header/header.component";
import { FooterComponent } from "./comp/footer/footer.component";
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from "./comp/login/login.component";
import { AuthService } from './shared/auth.service';
import { CartComponent } from "./comp/cart/cart.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, HeaderComponent, FooterComponent, ButtonModule, LoginComponent, CartComponent]
})
export class AppComponent {
  title = 'project';
  
}
