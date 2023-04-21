import {countriesDictionary} from "./data.helper";
import {ApiConfig} from "../models/config.model";
import {ICountryModel} from "../models/country.model";
import {IPhoneModel} from "../models/phone.model";

export function removeNonDigits(str: string | null): string | null {
  if (!str) {
    return null;
  }
  return str.replace(/\D/g, '');
}

export function getCountryHelperByCountryCode(
  countryCode?: string | null | undefined,
  defaultCountryIsoCode?: string | null | undefined,
  customCountryModel?: ICountryModel | null | undefined): ICountryModel {
  if (!countryCode) {
    if (!!customCountryModel) {
      return customCountryModel;
    }
    if (!defaultCountryIsoCode) {
      return countriesDictionary.international;
    } else {
      return countriesDictionary[defaultCountryIsoCode.toLowerCase()] ?? countriesDictionary.international;
    }
  }
  const countryCodeNormalized = countryCode.toUpperCase();

  let targetName = '';

  Object.keys(countriesDictionary).forEach(country => {
    if (!!countriesDictionary[country].name &&
      countriesDictionary[country].name!.toUpperCase() === countryCodeNormalized ||
      !!countriesDictionary[country].isoCode &&
      countriesDictionary[country].isoCode!.toUpperCase() === countryCodeNormalized ||
      !!countriesDictionary[country].isoCodeAlpha2 &&
      countriesDictionary[country].isoCodeAlpha2!.toUpperCase() === countryCodeNormalized) {
      targetName = country;
    }
  })
  return !!targetName ? countriesDictionary[targetName] : countriesDictionary.international;
}

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

  // let hasZero = countryHelper.phone.format.startsWith('0');

  let result = !!withCountryCode ? `${countryHelper.phone.code} ${(temp)}`  : temp;
  return result.trim();
}

export function checkIsItWithCountryCode(withCountryCode?: boolean | null | undefined, config?: ApiConfig | null): boolean | null | undefined {
  if (!config) {
    return withCountryCode;
  }
  if (typeof withCountryCode === 'boolean') {
    return withCountryCode;
  }
  return config.defaultWithCountryCode;
}

export function getMockPhone(phoneHelper: IPhoneModel | null | undefined, withCode: boolean): string | null | undefined {
  if (!phoneHelper) {
    return '';
  }
  let outputString = "";
  let digitCount = 1;
  let phoneFormat = (!!withCode ? (phoneHelper.formatInternational ?? phoneHelper.format) : phoneHelper.format)!;

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
