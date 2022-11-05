import { TestBed } from '@angular/core/testing';

import { AttributeClientService } from './attribute-client.service';

describe('AttributeClientService', () => {
  let service: AttributeClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributeClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
