import {ICountryModel} from "./country.model";

/**
 * Configuration options for the API.
 *
 * @typedef {Object} ApiConfig
 * @property {string|null|undefined} defaultCountryIsoCode - The default ISO code for the country to use.
 * @property {boolean|null|undefined} defaultWithCountryCode - Whether or not to include the country code by default.
 * @property {ICountryModel} [customCountry] - A custom country object to use instead of the default.
 */
export interface ApiConfig {
  defaultCountryIsoCode?: string | null | undefined,
  defaultWithCountryCode?: boolean | null | undefined,
  customCountry?: ICountryModel,
}

// Default config
export const defaultConfig: ApiConfig = {
  defaultCountryIsoCode: "",
  defaultWithCountryCode: true,
  /* customCountry : {
    isoCode: 'RUS',
    isoCodeAlpha2: 'RU',
    name: 'Russia',
    phone: {
      codeDigit: '7',
      code: '+7',
      format: '(XXX) XXX-XX-XX',
      formatInternational: '(XXX) XXX-XX-XX',
    }
  },*/
}
