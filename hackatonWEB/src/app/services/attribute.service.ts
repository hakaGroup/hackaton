import { Injectable } from '@angular/core';
import { AttributeClientService } from '../client/attribute-client.service';
import { Attribute } from '../models/attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(private attributeClientService: AttributeClientService) { }

  public getAttributes(callback: (data: any) => void){
    this.attributeClientService.getAttributes().subscribe(data => {
      callback(data.attributes)
    });
  };

}
