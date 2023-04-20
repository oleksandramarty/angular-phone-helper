import {ICountryModel} from "./country.model";

export interface ICountryPhoneMock {
  id: number,
  phone?: string | null,
  code?: string | null,
  withCode?: boolean,
  expected: string,
}

export interface ICountryPhoneListFormattedMock {
  id: string,
  phone?: string | null,
  expected: boolean,
  countryHelper: ICountryModel,
}
