import { Injectable } from '@angular/core';
import { FridgeClientService } from '../client/fridge-client.service';
import { Fridge_entries } from '../models/fridge_entries';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  constructor(private fridgeClientService: FridgeClientService) { }

  public getEntries(callback: (data: Fridge_entries[]) => void){
    this.fridgeClientService.getEntries().subscribe(callback);
  };
}
