import { TestBed } from '@angular/core/testing';

import { AngularPhoneHelperService } from './angular-phone-helper.service';

describe('AngularPhoneHelperService', () => {
  let service: AngularPhoneHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPhoneHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
