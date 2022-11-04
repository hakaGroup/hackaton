import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, take } from 'rxjs';
import { AuthClientService } from '../client/auth-client.service';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private TOKEN_KEY = "token";
  public token: string;

  constructor(private authClient: AuthClientService,
              private router: Router) {
    this.token = localStorage.getItem(this.TOKEN_KEY)!;
  }
  
  public loginUser(login: Login, onLogin: () => void, onError: (error: string) => void) {
    this.authClient.loginUser(login).subscribe(data => {
      this.token = data.token;
      localStorage.setItem(this.TOKEN_KEY, this.token);
      onLogin();
    }, error => {
      onError(error);
    });
  }

  public logout()
  {
    this.authClient.logout(this.token).subscribe(data => {
      this.token = "undefined";
      localStorage.setItem(this.TOKEN_KEY, "undefined");
      this.router.navigate(['/login']);
    });
  }

  public getToken(): string {
    return this.token;
  }

  public async isLogged(): Promise<boolean> {
    return await firstValueFrom(this.authClient.islogged(this.token)).then(data => {
      return true;
    }).catch(err => {
      return false;
    });
  }
}