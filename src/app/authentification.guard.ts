import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authentificationGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('access_token')){
    return true;
  }
    return false;
};
