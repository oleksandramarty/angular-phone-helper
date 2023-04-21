import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';
import {
  checkIsItWithCountryCode,
  convertToFormattedCountryPhone,
  getCountryHelperByCountryCode,
  removeNonDigits
} from "../helper/phone.helper";
import {API_CONFIG_TOKEN} from "../di";
import {ApiConfig, defaultConfig} from "../models/config.model";
import {IPhonePipeOptions} from "../models/phone.model";

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  constructor(@Optional() @Inject(API_CONFIG_TOKEN) private config?: ApiConfig | null) {}

  transform(
    phone: string | null | undefined, options?: IPhonePipeOptions | null): string {
    let countryIsoCode: string | null | undefined = this.config?.defaultCountryIsoCode ?? defaultConfig.defaultCountryIsoCode;
    let withCountryCode: boolean | null | undefined = this.config?.defaultWithCountryCode ?? defaultConfig.defaultWithCountryCode;

    if (options) {
      countryIsoCode = options.iso ?? countryIsoCode;
      withCountryCode = options.prefix ?? withCountryCode;
    }
    if (!phone) {
      return '';
    }
    // Remove all non-digit characters from the phone number
    const digitsOnly = removeNonDigits(phone) ?? '';

    // Find country by code, if it does not exist - chose international which is first
    const countryHelper = getCountryHelperByCountryCode(countryIsoCode, this.config?.defaultCountryIsoCode, this.config?.customCountry);

    // Check if country code is needed
    withCountryCode = checkIsItWithCountryCode(withCountryCode, this.config);
    // Apply the formatting pattern to the phone number
    let formattedPhone = convertToFormattedCountryPhone(digitsOnly, countryHelper, withCountryCode);

    return formattedPhone ?? '';
  }
}
