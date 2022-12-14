import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttributeClientService } from '../client/attribute-client.service';
import { AuthClientService } from '../client/auth-client.service';
import { FridgeClientService } from '../client/fridge-client.service';
import { ProductClientService } from '../client/product-client.service';
import { UserClientService } from '../client/user-client.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public appConfig: any;

  constructor(private http: HttpClient,
              private authService: AuthClientService,
              private userService: UserClientService,
              private productService: ProductClientService,
              private attributeService: AttributeClientService,
              private fridgeService: FridgeClientService) { }

  public loadConfig() {
    return this.http.get('/assets/config.json')
    .toPromise()
    .then(data => {
      this.appConfig = data;
      this.authService.setBaseUrl(this.appConfig.baseUrl);
      this.userService.setBaseUrl(this.appConfig.baseUrl);
      this.productService.setBaseUrl(this.appConfig.baseUrl);
      this.attributeService.setBaseUrl(this.appConfig.baseUrl);
      this.fridgeService.setBaseUrl(this.appConfig.baseUrl);
    })
  }
}
