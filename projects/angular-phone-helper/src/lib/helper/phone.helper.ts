import {countriesDictionary} from "./data.helper";
import {ApiConfig} from "../models/config.model";
import {ICountryModel} from "../models/country.model";
import {IPhoneModel} from "../models/phone.model";

/**
 * Remove all non-digit characters from a string.
 * @param str - The input string.
 * @returns The input string with all non-digit characters removed, or null if the input is null.
 * @throws TypeError if the input parameter is not a string or null.
 */
export function sanitizePhoneNumber(str: string | null): string | null {
  if (str === null) {
    return null;
  }
  if (typeof str !== 'string') {
    throw new TypeError('The input parameter must be a string or null.');
  }
  return str.replace(/\D/g, '');
}

/**
 * Get the country helper based on the country code, default country ISO code, and custom country model.
 * @param countryCode - The country code to use for getting the country helper. Can be a string, null, or undefined.
 * @param defaultCountryIsoCode - The default country ISO code to use if `countryCode` is null or undefined. Can be a string, null, or undefined.
 * @param customCountryModel - The custom country model to use if provided. Can be an `ICountryModel`, null, or undefined.
 * @returns The country helper based on the input parameters. If no country helper can be found, returns the international country helper.
 */
export function getCountryHelperByCountryCode(
  countryCode?: string | null | undefined,
  defaultCountryIsoCode?: string | null | undefined,
  customCountryModel?: ICountryModel | null | undefined
): ICountryModel {
  if (customCountryModel) {
    return customCountryModel;
  }

  const countryCodeNormalized = countryCode?.toUpperCase();

  for (const [key, value] of Object.entries(countriesDictionary)) {
    if (
      value.name?.toUpperCase() === countryCodeNormalized ||
      value.isoCode?.toUpperCase() === countryCodeNormalized ||
      value.isoCodeAlpha2?.toUpperCase() === countryCodeNormalized
    ) {
      return value;
    }
  }

  if (defaultCountryIsoCode) {
    const defaultCountry = countriesDictionary[defaultCountryIsoCode.toLowerCase()];
    if (defaultCountry) {
      return defaultCountry;
    }
  }

  return countriesDictionary.international;
}

/**
 * Convert phone to format a phone number based on the given countryHelper object, which contains information about the phone number format and country code.
 * @param phone - The phone number to be formatted. Can be a string or null.
 * @param countryHelper - A boolean value that indicates whether the formatted phone number should include the country code.
 * @returns The function returns a formatted phone number string for a given country, with or without the country code, based on the provided phone number, country model, and format.
 */
export function convertToFormattedCountryPhone(phone: string | null, countryHelper: ICountryModel | null, withCountryCode?: boolean | null | undefined): string | null {
  if (!phone || !countryHelper || !countryHelper.phone.format) {
    return '';
  }

  let temp = '';
  let format = withCountryCode ? (countryHelper.phone.formatInternational ?? countryHelper.phone.format) : countryHelper.phone.format;

  let arr = Array(countryHelper.phone.format?.length ?? 0).fill(-1);
  let digIndex = 0;
  format.split('').forEach((item, index) => {
    if (item === 'X') {
      arr[index] = digIndex;
      digIndex++;
    }
  });

  if (phone.length > digIndex) {
    phone = phone.slice(digIndex * (-1));
  }

  if (phone.length !== digIndex) {
    return phone;
  }

  arr.forEach((item, index) => {
    temp += item > -1 ?
      (!!phone && !!phone[item] ? phone[item] : '') :
      (!!format && !!format[index] ? format[index] : '');
  });

  let result = !!withCountryCode ? `${countryHelper.phone.code} ${(temp)}`  : temp;
  return result.trim();
}

/**
 * Get the preference for whether to include the country code in phone numbers.
 * @param withCountryCode - Whether to include the country code in phone numbers. Can be a boolean, null, or undefined.
 * @param config - The API configuration. If provided, the default preference for including the country code will be used if `withCountryCode` is null or undefined.
 * @returns The preference for including the country code in phone numbers. If `config` is null or undefined, returns `withCountryCode`. If `withCountryCode` is null or undefined, returns the default preference from `config`.
 * @throws TypeError if the input parameter is not a boolean, null, or undefined.
 */
export function getWithCountryCodePreference(withCountryCode?: boolean | null | undefined, config?: ApiConfig | null): boolean | null | undefined {
  if (typeof withCountryCode === 'boolean') {
    return withCountryCode;
  }
  if (withCountryCode !== null && withCountryCode !== undefined) {
    throw new TypeError('The `withCountryCode` parameter must be a boolean, null, or undefined.');
  }
  if (!config) {
    return withCountryCode;
  }
  return config.defaultWithCountryCode;
}


/**
 * Generate a mock phone number based on a phone model.
 * @param phoneModel - The phone model to use for generating the mock phone number. Can be an `IPhoneModel`, null, or undefined.
 * @param withCode - Whether to include the country code in the mock phone number.
 * @returns The mock phone number generated based on the `phoneModel`.
 * If `phoneModel` is null or undefined, returns null.
 * If `withCode` is true, the mock phone number will include the country code.
 * If `withCode` is false, the mock phone number will not include the country code.
 */
export function getMockPhone(phoneModel: IPhoneModel | null | undefined, withCode: boolean): string | null | undefined {
  if (!phoneModel) {
    return null;
  }

  let outputString = "";
  let digitCount = 1;
  const phoneFormat = withCode ? phoneModel.formatInternational ?? phoneModel.format : phoneModel.format;

  if (typeof phoneFormat !== 'string') {
    throw new TypeError('The input parameter must be a string or null.');
  }

  for (let i = 0; i < phoneFormat.length; i++) {
    const char = phoneFormat.charAt(i);
    if (char === "X") {
      outputString += digitCount % 10;
      digitCount++;
    } else {
      outputString += char;
    }
  }

  return outputString.replace(/^(\++)+/g, '+');
}

