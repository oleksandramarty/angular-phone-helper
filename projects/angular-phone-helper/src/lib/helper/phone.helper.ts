import {countriesDictionary} from "./data.helper";
import {ApiConfig} from "../models/config.model";
import {ICountryModel} from "../models/country.model";

export function removeNonDigits(str: string | null): string | null {
  if (!str) {
    return null;
  }
  return str.replace(/\D/g, '');
}

export function getCountryHelperByCountryCode(countryCode?: string | null | undefined, defaultCountryIsoCode?: string | null | undefined): ICountryModel {
  if (!countryCode) {
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

  let arr = Array(countryHelper.phone.format?.length ?? 0).fill(-1);
  let digIndex = 0;
  countryHelper.phone.format.split('').forEach((item, index) => {
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
      (!!countryHelper.phone.format && !!countryHelper.phone.format[index] ? countryHelper.phone.format[index] : '');
  });

  let hasZero = countryHelper.phone.format.startsWith('0');

  let result = !!withCountryCode ? `${countryHelper.phone.code} ${(hasZero ? temp.slice(1) : temp)}`  : temp;

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
