import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let logged: boolean = false;

    await this.authService.isLogged().then(data => {
      logged = data;
    }).catch(err => {
      logged = false;
    });

    if(logged)
      return true;
    this.router.navigate(['/login']);
    return Promise.reject(false);
  }
}
