import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login;
  error: any;

  constructor(private authService: AuthService,
              private router: Router) {
    this.login = new Login();
  }

  ngOnInit(): void {
    this.authService.isLogged().then(data => {
      if(data)
        this.router.navigate(['/panel']);
    })      
  }

  onLogin() {
    this.authService.loginUser(this.login, () => {
      this.router.navigate(['/panel']);
    }, (error) => {
      this.error = error;
    });
  }
}
