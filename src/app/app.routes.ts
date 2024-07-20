import { Routes } from '@angular/router';
import { ViewdetailComponent } from './comp/viewdetail/viewdetail.component';
import { HomeComponent } from './comp/home/home.component';
import { CartComponent } from './comp/cart/cart.component';
import { LoginComponent } from './comp/login/login.component';

 import { authGuard } from './auth.guard';
import { ShopComponent } from './comp/shop/shop.component';
import { BlogComponent } from './comp/blog/blog.component';
import { AboutComponent } from './comp/about/about.component';
import { ContactComponent } from './comp/contact/contact.component';

export const routes: Routes = [
    {path:"home",
        component:HomeComponent,
        title:'home',
        canActivate:[authGuard]
    },
    {path:'view-details/:id',
        //  component: ViewdetailComponent,
        loadComponent:()=>import('./comp/viewdetail/viewdetail.component').then(c=>c.ViewdetailComponent),
         title:'viewdetail',
         canActivate: [authGuard] 
        },
    {path:'cart',
        // component:CartComponent, 
        loadComponent:()=>import('./comp/cart/cart.component').then (c=>c.CartComponent),
        title:'cart',
        canActivate: [authGuard]
    },
    {path:'shop',
        // component:ShopComponent, 
        loadComponent:()=>import('./comp/shop/shop.component').then(c=>c.ShopComponent),
        title:'shop',
        canActivate: [authGuard]
    },
    {path:'blog',
        // component:BlogComponent,
        loadComponent:()=>import('./comp/blog/blog.component').then(c=>c.BlogComponent),

         title:'blog',
         canActivate: [authGuard]
        },
    {path:'about',
        // component:AboutComponent,
        loadComponent:()=>import('./comp/about/about.component').then(c=>c.AboutComponent),

         title:'about',
         canActivate: [authGuard]
        },
    {path:'contact',
        // component:ContactComponent,
        loadComponent:()=>import('./comp/contact/contact.component').then(c=>c.ContactComponent),

         title:'contact',
         canActivate: [authGuard]
        },
    { path: '',
         component:LoginComponent,
          pathMatch: 'full'
         }
    
];
