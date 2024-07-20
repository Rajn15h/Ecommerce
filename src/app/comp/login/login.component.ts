import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../shared/api.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
// [x: string]: any;
  username: string = '';
  password: string = '';

  constructor(public authService: AuthService, private router: Router,private api:ApiService) {}
  ngOnInit(): void {
    this.api.exclusive.next(false);

  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed');
    }
  }
  

  }
 






