import {  CanActivateFn, Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './shared/auth.service';



export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
    if(inject(AuthService).isAuthenticated()){
        return true;
    }else{
        inject(Router).navigate(['']);
        return false;
    }
    
  
};






