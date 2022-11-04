import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: Register;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
    this.register = new Register();
  }

  ngOnInit(): void {
    this.authService.isLogged().then(data => {
      if(data)
        this.router.navigate(['/panel']);
    }) 
  }

  onRegister() {
    this.userService.registerUser(this.register, () => {
      this.router.navigate(['/panel']);
    }, () => {});
  }
}
