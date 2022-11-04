import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthClientService } from '../client/auth-client.service';
import { UserClientService } from '../client/user-client.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public appConfig: any;

  constructor(private http: HttpClient,
              private authService: AuthClientService,
              private userService: UserClientService) { }

  public loadConfig() {
    return this.http.get('/assets/config.json')
    .toPromise()
    .then(data => {
      this.appConfig = data;
      this.authService.setBaseUrl(this.appConfig.baseUrl);
      this.userService.setBaseUrl(this.appConfig.baseUrl);
    })
  }
}
