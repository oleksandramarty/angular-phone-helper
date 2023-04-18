import {Inject, Injectable, Optional} from '@angular/core';
import {API_CONFIG_TOKEN} from "./di";
import {ApiConfig} from "./models/config.model";
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {countriesDictionary} from "./helper/data.helper";
import {ICountryModel} from "./models/country.model";
import {getCountryHelperByCountryCode} from "./helper/phone.helper";

@Injectable({
  providedIn: 'root'
})
export class PhoneFormatService {

  constructor(
    @Optional() @Inject(API_CONFIG_TOKEN) private readonly config: ApiConfig | null,
    private readonly phoneFormatPipe: PhoneFormatPipe,
    ) { }

  public isInternationalFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.international);
  }
  public isUnitedStatesFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.usa);
  }
  public isCanadaFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.can);
  }
  public isUnitedKingdomFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.gbr);
  }
  public isFranceFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.fra);
  }
  public isGermanyFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.deu);
  }
  public isItalyFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.ita);
  }
  public isPolandFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.pol);
  }
  public isUkraineFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.ukr);
  }
  public isMoldovaFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.mda);
  }
  public isGreeceFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.grc);
  }
  public isTurkeyFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.tur);
  }
  public isIndiaFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.ind);
  }
  public isChinaFormatted(phone: string | null | undefined): boolean {
    return this.isMatchedWithHelper(phone, countriesDictionary.chn);
  }

  public isFormatted(phone: string | null | undefined, countryIsoCode: string | null | undefined): boolean {
    if (!phone || !countryIsoCode) {
      return false;
    }

    const countryHelper = getCountryHelperByCountryCode(countryIsoCode, this.config?.defaultCountryIsoCode);

    const phoneWithoutCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: false });
    const phoneWithCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: true });

    return phone === phoneWithoutCode || phone === phoneWithCode;
  }

  public isMatchedWithHelper(phone: string | null | undefined, countryHelper: ICountryModel): boolean {
    if (!phone) {
      return false;
    }

    const phoneWithoutCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: false });
    const phoneWithCode = this.phoneFormatPipe.transform(phone, { iso: countryHelper.isoCode, prefix: true });

    return phone === phoneWithoutCode || phone === phoneWithCode;
  }
}
