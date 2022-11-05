import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser(user => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();    
  }
}
