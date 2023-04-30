import {ICountryModel} from "./country.model";

/**
 Represents a mocked object for a country phone number.
 @interface
 @property {number} id - The unique identifier of the mocked object.
 @property {string|null|undefined} [phone] - The phone number associated with the mocked object.
 @property {string|null|undefined} [iso] - The iso code associated with the phone number.
 @property {boolean|undefined} [withCode] - Determines if the phone number includes the country code.
 @property {string} expected - The expected value associated with the mocked object.
 @property {string|null|undefined} [code] - The custom code associated with the phone number.
 @property {string|null|undefined} [format] - The custom phone format associated with the phone number.
 */
export interface ICountryPhoneMock {
  id: number,
  phone?: string | null,
  iso?: string | null,
  withCode?: boolean,
  expected: string,
  code?: string | null,
  format?: string | null,
}

/**
 * Interface for a formatted country phone list mock.
 * @typedef {Object} ICountryPhoneListFormattedMock
 * @property {string} id - The identifier for the phone number.
 * @property {string|null|undefined} [phone] - The phone number (optional).
 * @property {boolean} expected - Indicates if the phone number is expected or not.
 * @property {ICountryModel} countryHelper - The country model associated with the phone number.
 */
export interface ICountryPhoneListFormattedMock {
  id: string,
  phone?: string | null,
  expected: boolean,
  countryHelper: ICountryModel,
}
