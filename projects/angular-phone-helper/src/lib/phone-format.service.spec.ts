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

  const testData: ICountryPhoneListFormattedMock[] = [
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

    { id: 22, phone: '123 456 789', expected: true, countryHelper: countriesDictionary.pol, },
    { id: 23, phone: '+48 123 456 789', expected: true, countryHelper: countriesDictionary.pol, },
    { id: 24, phone: '+49 123 456 789', expected: false, countryHelper: countriesDictionary.pol, },

    { id: 25, phone: '123 456 78 90', expected: true, countryHelper: countriesDictionary.ukr, },
    { id: 26, phone: '+380 123 456 78 90', expected: true, countryHelper: countriesDictionary.ukr, },
    { id: 27, phone: '+381 123 456 78 90', expected: false, countryHelper: countriesDictionary.ukr, },

    { id: 28, phone: '12 345 678', expected: true, countryHelper: countriesDictionary.mda, },
    { id: 29, phone: '+373 12 345 678', expected: true, countryHelper: countriesDictionary.mda, },
    { id: 30, phone: '+374 12 345 678', expected: false, countryHelper: countriesDictionary.mda, },

    { id: 31, phone: '123 456 7890', expected: true, countryHelper: countriesDictionary.grc, },
    { id: 32, phone: '+30 123 456 7890', expected: true, countryHelper: countriesDictionary.grc, },
    { id: 33, phone: '+31 123 456 7890', expected: false, countryHelper: countriesDictionary.grc, },

    { id: 34, phone: '123 456 7890', expected: true, countryHelper: countriesDictionary.tur, },
    { id: 35, phone: '+90 123 456 7890', expected: true, countryHelper: countriesDictionary.tur, },
    { id: 36, phone: '+91 123 456 7890', expected: false, countryHelper: countriesDictionary.tur, },

    { id: 37, phone: '12345 67890', expected: true, countryHelper: countriesDictionary.ind, },
    { id: 38, phone: '+91 12345 67890', expected: true, countryHelper: countriesDictionary.ind, },
    { id: 39, phone: '+92 12345 67890', expected: false, countryHelper: countriesDictionary.ind, },

    { id: 40, phone: '123 4567 8900', expected: true, countryHelper: countriesDictionary.chn, },
    { id: 41, phone: '+86 123 4567 8900', expected: true, countryHelper: countriesDictionary.chn, },
    { id: 42, phone: '+87 123 4567 8900', expected: false, countryHelper: countriesDictionary.chn, },
  ];

  testData.forEach((item ,index) => {
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
        case countriesDictionary.pol.id:
          result = service.isPolandFormatted(item.phone);
          break;
        case countriesDictionary.ukr.id:
          result = service.isUkraineFormatted(item.phone);
          break;
        case countriesDictionary.mda.id:
          result = service.isMoldovaFormatted(item.phone);
          break;
        case countriesDictionary.grc.id:
          result = service.isGreeceFormatted(item.phone);
          break;
        case countriesDictionary.tur.id:
          result = service.isTurkeyFormatted(item.phone);
          break;
        case countriesDictionary.ind.id:
          result = service.isIndiaFormatted(item.phone);
          break;
        case countriesDictionary.chn.id:
          result = service.isChinaFormatted(item.phone);
          break;
      }
      expect(result).toEqual(item.expected);
      // console.log(`PASSED: ${message}`);
    });

    it(message + ' for general is matched method', () => {
      let result = service.isFormatted(item.phone, item.countryHelper.isoCode);
      expect(result).toEqual(item.expected);
      // console.log(`PASSED: ${message}`);
    });
  });

  it('All data IDs are unique', () => {
    const nonUniqueObjects =
      testData
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
