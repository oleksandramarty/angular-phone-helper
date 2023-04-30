import { PhoneFormatPipe } from './phone-format.pipe';
import {ICountryPhoneListFormattedMock, ICountryPhoneMock} from "../models/country-phone.mock.model";
import {TestBed} from "@angular/core/testing";
import {API_CONFIG_TOKEN} from "../di";
import {defaultConfig} from "../models/config.model";
import {countriesDictionary} from "../helper/data.helper";
import {getMockPhoneFromString, sanitizePhoneNumber} from "../helper/phone.helper";

describe('PhoneFormatPipe', () => {
  let pipe: PhoneFormatPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhoneFormatPipe,
        { provide: API_CONFIG_TOKEN, useValue: defaultConfig } // Provide the mock config object
      ]
    });

    pipe = TestBed.inject(PhoneFormatPipe);
  });

  let testData: ICountryPhoneMock[] = [
    { id: 1, phone: '+1234567890', iso: 'US', expected: '+1 (123) 456-7890' },
    { id: 2, phone: '123456789', iso: 'US', expected: '123456789' },
    { id: 3, phone: '(123) 456-7890', iso: 'United States', expected: '+1 (123) 456-7890' },
    { id: 4, phone: '+1 (123) 456-7890', iso: 'usa', expected: '+1 (123) 456-7890' },
    { id: 5, phone: '1234567890', iso: 'Us', expected: '+1 (123) 456-7890' },
    { id: 6, phone: '1234567890', iso: 'us', expected: '+1 (123) 456-7890' },
    { id: 7, phone: '1234567890', iso: 'us', withCode: false, expected: '(123) 456-7890' },
    { id: 8, phone: '1234567890', iso: 'CA', expected: '+1 (123) 456-7890' },
    { id: 9, phone: '1234567890', iso: 'GB', expected: '+44 12 3456 7890' },
    { id: 10, phone: '01234567890', iso: 'GB', expected: '+44 12 3456 7890' },
    { id: 11, phone: '1234567890', iso: 'GB', withCode: false, expected: '012 3456 7890' },
    { id: 12, phone: '01234567890', iso: 'GB', withCode: false, expected: '012 3456 7890' },
    { id: 13, phone: '123456789', iso: 'FR', expected: '+33 1 23 45 67 89' },
    { id: 14, phone: '0123456789', iso: 'FR', expected: '+33 1 23 45 67 89' },
    { id: 15, phone: '123456789', iso: 'FR', withCode: false, expected: '01 23 45 67 89' },
    { id: 16, phone: '0123456789', iso: 'FR', withCode: false, expected: '01 23 45 67 89' },
    { id: 17, phone: '1234567890', iso: 'DE', expected: '+49 123 4567890' },
    { id: 18, phone: '01234567890', iso: 'DE', expected: '+49 123 4567890' },
    { id: 19, phone: '1234567890', iso: 'DE', withCode: false, expected: '0123 4567890' },
    { id: 20, phone: '01234567890', iso: 'DE', withCode: false, expected: '0123 4567890' },
    { id: 21, phone: '+44 1234567890', iso: 'GB', expected: '+44 12 3456 7890' },
    { id: 22, phone: '+44 01234567890', iso: 'GB', expected: '+44 12 3456 7890' },
    { id: 23, phone: '+44 1234567890', iso: 'GB', withCode: false, expected: '012 3456 7890' },
    { id: 24, phone: '+44 01234567890', iso: 'GB', withCode: false, expected: '012 3456 7890' },
    { id: 25, phone: '+33123456789', iso: 'FR', expected: '+33 1 23 45 67 89' },
    { id: 26, phone: '+330123456789', iso: 'FR', expected: '+33 1 23 45 67 89' },
    { id: 27, phone: '+33123456789', iso: 'FR', withCode: false, expected: '01 23 45 67 89' },
    { id: 28, phone: '+330123456789', iso: 'FR', withCode: false, expected: '01 23 45 67 89' },
    { id: 29, phone: '+491234567890', iso: 'DE', expected: '+49 123 4567890' },
    { id: 30, phone: '+4901234567890', iso: 'DE', expected: '+49 123 4567890' },
    { id: 31, phone: '+491234567890', iso: 'DE', withCode: false, expected: '0123 4567890' },
    { id: 32, phone: '+4901234567890', iso: 'DE', withCode: false, expected: '0123 4567890' },
    { id: 33, phone: '+481234567890', iso: 'DE', expected: '+49 123 4567890' },
    { id: 34, phone: '+4801234567890', iso: 'DE', withCode: false, expected: '0123 4567890' },
    { id: 35, phone: '+4811231234567890', iso: null, withCode: false, expected: '+3 123 456 7890' },
    { id: 36, phone: null, iso: null, expected: '' },
    { id: 37, phone: '123', iso: null, withCode: false, expected: '123' },
    { id: 38, phone: '   ', iso: null, withCode: false, expected: '' },
    { id: 39, phone: ' abc', iso: null, withCode: false, expected: '' },
    { id: 40, phone: '11234567890', iso: null, expected: '+1 123 456 7890' },
    { id: 41, phone: '11234567890', iso: null, withCode: false, expected: '+1 123 456 7890' },

    { id: 42, phone: '1234567890', iso: 'IT', expected: '+39 123 456 7890' },
    { id: 43, phone: '1234567890', iso: 'IT', withCode: false, expected: '123 456 7890' },
    { id: 44, phone: '+391234567890', iso: 'IT', expected: '+39 123 456 7890' },
    { id: 45, phone: '+391234567890', iso: 'IT', withCode: false, expected: '123 456 7890' },
    { id: 46, phone: '+401234567890', iso: 'IT', expected: '+39 123 456 7890' },
    { id: 47, phone: '+401234567890', iso: 'IT', withCode: false, expected: '123 456 7890' },

    { id: 48, phone: '+4012345678900', iso: 'CN', withCode: false, expected: '123 4567 8900' },
    { id: 49, phone: '1234567890', iso: 'US', expected: '+1 (123) 456-7890' },
  ];

  Object.keys(countriesDictionary).forEach(name => {
    if (!!countriesDictionary[name]) {
      let phoneWithoutCode = getMockPhoneFromString(countriesDictionary[name].phone.format)!.trim();
      testData.push({
        id: 100 * countriesDictionary[name].id! + 1,
        code: countriesDictionary[name].phone.code,
        iso: countriesDictionary[name].isoCode,
        withCode: false,
        phone: sanitizePhoneNumber(phoneWithoutCode),
        expected: phoneWithoutCode,
        format: countriesDictionary[name].phone.format,
      });

      let phoneWithCode = `${countriesDictionary[name].phone.code} ${getMockPhoneFromString(countriesDictionary[name].phone.format)!}`.trim();
      testData.push({
        id: 100 * countriesDictionary[name].id! + 2,
        code: countriesDictionary[name].phone.code,
        iso: countriesDictionary[name].isoCode,
        withCode: true,
        phone: sanitizePhoneNumber(phoneWithCode),
        expected: phoneWithCode,
        format: countriesDictionary[name].phone.format,
      });
    }
  });

  it('All data IDs are unique', () => {
    const nonUniqueObjects = testData.filter((obj, index, array) => {
      return array.findIndex(o => o.id === obj.id) !== index;
    });

    const nonUniqueIds = nonUniqueObjects.map(obj => obj.id);
    // if (nonUniqueObjects.length > 0) {
    //   console.log(`phone-format-pipe IDs ${nonUniqueIds.join(', ')} are not unique.`);
    // }

    expect(nonUniqueIds.length === 0).toBeTrue();
  });

  testData.forEach((item ,index) => {
    let message = `Test ID:phone-format-pipe-${item.id} transform ${item.iso} phone ${item.phone} into ${item.expected} ${item.withCode ? 'with' : 'without'} code`;
    it(message, () => {
      const result = pipe.transform(item.phone, { iso: item.iso, prefix: item.withCode, code: item.code, format: item.format});
      expect(result).toEqual(item.expected);
      // console.log(`PASSED: ${message}`);
    });
  });

  // it('Custom phone', () => {
  //   const result = pipe.transform('1234567890');
  //   expect(result).toEqual('+7 (123) 456-78-90');
  //   // console.log(`PASSED: ${message}`);
  // });
});
