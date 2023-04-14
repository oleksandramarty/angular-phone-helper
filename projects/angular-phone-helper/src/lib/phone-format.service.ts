import {Inject, Injectable, Optional} from '@angular/core';
import {API_CONFIG_TOKEN} from "./di";
import {ApiConfig} from "./models/config.model";
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {countriesDictionary} from "./helper/data.helper";
import {ICountryModel} from "./models/country.model";

@Injectable({
  providedIn: 'root'
})
export class PhoneFormatService {

  constructor(
    @Optional() @Inject(API_CONFIG_TOKEN) private readonly config: ApiConfig | null,
    private readonly phoneFormatPipe: PhoneFormatPipe,
    ) { }

  public isInternationalFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.international);
  }
  public isUnitedStatesFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.usa);
  }
  public isCanadaFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.can);
  }
  public isUnitedKingdomFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.gbr);
  }
  public isFranceFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.fra);
  }
  public isGermanyFormatted(phone: string | null | undefined): boolean {
    return this.isMatched(phone, countriesDictionary.deu);
  }

  private isMatched(phone: string | null | undefined, countryHelper: ICountryModel): boolean {
    if (!phone) {
      return false;
    }

    const phoneWithoutCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: false });
    const phoneWithCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: true });

    return phone === phoneWithoutCode || phone === phoneWithCode;
  }
}
