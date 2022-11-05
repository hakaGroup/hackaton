import { TestBed } from '@angular/core/testing';

import { FridgeClientService } from './fridge-client.service';

describe('FridgeClientService', () => {
  let service: FridgeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FridgeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
