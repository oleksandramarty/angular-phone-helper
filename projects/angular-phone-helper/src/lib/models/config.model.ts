import {ICountryModel} from "./country.model";

export interface ApiConfig {
  defaultCountryIsoCode?: string | null | undefined,
  defaultWithCountryCode?: boolean | null | undefined,
  customCountry?: ICountryModel,
}

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
