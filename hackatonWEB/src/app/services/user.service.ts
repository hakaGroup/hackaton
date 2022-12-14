import { Injectable } from '@angular/core';
import { UserClientService } from '../client/user-client.service';
import { Register } from '../models/register';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userClientService: UserClientService) { }

  public registerUser(register: Register, onRegister: () => void, onError: (error: string) => void) {
    this.userClientService.registerUser(register).subscribe(data => {
      onRegister();
    }, error => {
      onError(error.error);
    });
  }

  public getUser(callback: (data: User) => void) {
    this.userClientService.getUser().subscribe(data => {
      callback(data);
    });
  }
}
