import {Inject, Pipe, PipeTransform} from '@angular/core';
import {
  checkIsItWithCountryCode,
  convertToFormattedCountryPhone,
  getCountryHelperByCountryCode,
  removeNonDigits
} from "../helper/phone.helper";
import {API_CONFIG_TOKEN} from "../di";
import {ApiConfig} from "../models/config.model";

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  constructor(@Inject(API_CONFIG_TOKEN) private config?: ApiConfig | null) {}

  transform(
    phone: string | null | undefined,
    countryIsoCode?: string | null | undefined,
    withCountryCode?: boolean | null | undefined): string {
    if (!phone) {
      return '';
    }
    // Remove all non-digit characters from the phone number
    const digitsOnly = removeNonDigits(phone) ?? '';

    // Find country by code, if it does not exist - chose international which is first
    const countryHelper = getCountryHelperByCountryCode(countryIsoCode);

    // Check if country code is needed
    withCountryCode = checkIsItWithCountryCode(withCountryCode, this.config);

    // Apply the formatting pattern to the phone number
    let formattedPhone = convertToFormattedCountryPhone(digitsOnly, countryHelper, withCountryCode);

    return formattedPhone ?? '';
  }
}
