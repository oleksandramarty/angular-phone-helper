import {Inject, Optional, Pipe, PipeTransform} from '@angular/core';

// Import helper functions and models
import {
  getWithCountryCodePreference,
  convertToFormattedCountryPhone,
  getCountryHelperByCountryCode,
  sanitizePhoneNumber,
} from "../helper/phone.helper";
import {API_CONFIG_TOKEN} from "../di";
import {ApiConfig, defaultConfig} from "../models/config.model";
import {IPhonePipeOptions} from "../models/phone.model";

/**
 @description This pipe formats a phone number based on the provided options.
 @name PhoneFormatPipe
 Copy code
 {{ phoneNumber | phoneFormat: options }}
 Copy code
 {{ '1234567890' | phoneFormat: {iso: 'USA', prefix: true} }} // Returns '+1 (123) 456-7890'
 Copy code
 @param {string | null | undefined} phone - The phone number to format.
 @param {IPhonePipeOptions | null} [options] - Optional object that can specify the country iso and whether to include the country code prefix.
 @param {string | null | undefined} options.iso - The country iso code to use for formatting. If not provided, it will use the default country iso code from the API config.
 @param {boolean | null | undefined} options.prefix - Whether to include the country code prefix in the formatted phone number. If not provided, it will use the default value from the API config.
 @returns {string} - The formatted phone number.
 @requires {@link getWithCountryCodePreference}
 @requires {@link convertToFormattedCountryPhone}
 @requires {@link getCountryHelperByCountryCode}
 @requires {@link sanitizePhoneNumber}
 @requires {@link API_CONFIG_TOKEN}
 @requires {@link ApiConfig}
 @requires {@link defaultConfig}
 @requires {@link IPhonePipeOptions}
 @constructor - constructs a new instance of PhoneFormatPipe
 @param {ApiConfig | null} [config=null] - Optional API config object. If provided, it will use the values from this object instead of the default values.
 */
@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  // Inject API_CONFIG_TOKEN using the @Inject decorator and mark it as optional using the @Optional decorator
  constructor(@Optional() @Inject(API_CONFIG_TOKEN) private config?: ApiConfig | null) {}

  // Transform function that converts a given phone number to a formatted phone number
  transform(phone: string | null | undefined, options?: IPhonePipeOptions | null): string {

    // Initialize countryIsoCode and withCountryCode variables
    let countryIsoCode: string | null | undefined = this.config?.defaultCountryIsoCode ?? defaultConfig.defaultCountryIsoCode;
    let withCountryCode: boolean | null | undefined = this.config?.defaultWithCountryCode ?? defaultConfig.defaultWithCountryCode;

    // Override defaults with options, if options are provided
    if (options) {
      countryIsoCode = options.iso ?? countryIsoCode;
      withCountryCode = options.prefix ?? withCountryCode;
    }

    // Return empty string if phone number is null or undefined
    if (!phone) {
      return '';
    }

    // Remove all non-digit characters from the phone number
    const digitsOnly = sanitizePhoneNumber(phone) ?? '';

    // Find country by code, if it does not exist - chose international which is first
    const countryHelper = getCountryHelperByCountryCode(countryIsoCode, this.config?.defaultCountryIsoCode, this.config?.customCountry);

    // Check if country code is needed
    withCountryCode = getWithCountryCodePreference(withCountryCode, this.config);

    // Apply the formatting pattern to the phone number
    let formattedPhone = convertToFormattedCountryPhone(digitsOnly, countryHelper, withCountryCode);

    // Return the formatted phone number or an empty string if it is null or undefined
    return formattedPhone ?? '';
  }
}
