import { TestBed } from '@angular/core/testing';

import { WebService } from '../web-admin/web.service';

describe('ConfigService', () => {
  let service: WebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
