import { TestBed } from '@angular/core/testing';

import { PhoneFormatService } from './phone-format.service';
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {API_CONFIG_TOKEN} from "./di";
import {defaultConfig} from "./models/config.model";
import {ICountryPhoneListFormattedMock} from "./models/country-phone.mock.model";
import {countriesDictionary} from "./helper/data.helper";

describe('PhoneFormatService', () => {
  let service: PhoneFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhoneFormatPipe,
        PhoneFormatService,
        { provide: API_CONFIG_TOKEN, useValue: defaultConfig }
      ]
    });
    service = TestBed.inject(PhoneFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const testUsaOrCanadaData: ICountryPhoneListFormattedMock[] = [
    { id: 1, phone: '+3 123 456 7890', expected: true, countryHelper: countriesDictionary.international, },
    { id: 2, phone: '+4811231234567890', expected: false, countryHelper: countriesDictionary.international, },
    { id: 3, phone: '+481 2312 67890', expected: false, countryHelper: countriesDictionary.international, },

    { id: 4, phone: '(123) 456-7890', expected: true, countryHelper: countriesDictionary.usa, },
    { id: 5, phone: '+1 (123) 456-7890', expected: true, countryHelper: countriesDictionary.usa, },
    { id: 6, phone: '+2 (123) 456-7890', expected: false, countryHelper: countriesDictionary.usa, },

    { id: 7, phone: '(123) 456-7890', expected: true, countryHelper: countriesDictionary.can, },
    { id: 8, phone: '+1 (123) 456-7890', expected: true, countryHelper: countriesDictionary.can, },
    { id: 9, phone: '+2 (123) 456-7890', expected: false, countryHelper: countriesDictionary.can, },

    { id: 10, phone: '012 3456 7890', expected: true, countryHelper: countriesDictionary.gbr, },
    { id: 11, phone: '+44 12 3456 7890', expected: true, countryHelper: countriesDictionary.gbr, },
    { id: 12, phone: '+45 12 3456 7890', expected: false, countryHelper: countriesDictionary.gbr, },

    { id: 13, phone: '01 23 45 67 89', expected: true, countryHelper: countriesDictionary.fra, },
    { id: 14, phone: '+33 1 23 45 67 89', expected: true, countryHelper: countriesDictionary.fra, },
    { id: 15, phone: '+35 1 23 45 67 89', expected: false, countryHelper: countriesDictionary.fra, },

    { id: 16, phone: '0123 4567890', expected: true, countryHelper: countriesDictionary.deu, },
    { id: 17, phone: '+49 123 4567890', expected: true, countryHelper: countriesDictionary.deu, },
    { id: 18, phone: '+48 123 4567890', expected: false, countryHelper: countriesDictionary.deu, },

    { id: 19, phone: '123 456 7890', expected: true, countryHelper: countriesDictionary.ita, },
    { id: 20, phone: '+39 123 456 7890', expected: true, countryHelper: countriesDictionary.ita, },
    { id: 21, phone: '+48 123 4567890', expected: false, countryHelper: countriesDictionary.ita, },
  ];

  testUsaOrCanadaData.forEach((item ,index) => {
    let message = `Test ID:angular-phone-service-${item.id} check phone ${item.phone} is ${item.countryHelper.name} phone to be ${item.expected.toString()}`;
    it(message, () => {
      let result = false;
      switch (item.countryHelper.id) {
        case countriesDictionary.international.id:
          result = service.isInternationalFormatted(item.phone);
          break;
        case countriesDictionary.usa.id:
          result = service.isUnitedStatesFormatted(item.phone);
          break;
        case countriesDictionary.can.id:
          result = service.isCanadaFormatted(item.phone);
          break;
        case countriesDictionary.gbr.id:
          result = service.isUnitedKingdomFormatted(item.phone);
          break;
        case countriesDictionary.fra.id:
          result = service.isFranceFormatted(item.phone);
          break;
        case countriesDictionary.deu.id:
          result = service.isGermanyFormatted(item.phone);
          break;
        case countriesDictionary.ita.id:
          result = service.isItalyFormatted(item.phone);
          break;
      }
      expect(result).toEqual(item.expected);
      // console.log(`PASSED: ${message}`);
    });
  });

  it('All data IDs are unique', () => {
    const nonUniqueObjects =
      testUsaOrCanadaData
        .filter((obj, index, array) => {
          return array.findIndex(o => o.id === obj.id) !== index;
        });

    const nonUniqueIds = nonUniqueObjects.map(obj => obj.id);
    // if (nonUniqueObjects.length > 0) {
    //  console.log(`angular-phone-service IDs ${nonUniqueIds.join(', ')} are not unique.`);
    // }

    expect(nonUniqueIds.length === 0).toBeTrue();
  });
});
