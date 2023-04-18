import {IPhoneModel} from "./phone.model";

export interface ICountryListModel {
  [key: string]: ICountryModel,
  international: ICountryModel,
  usa: ICountryModel,
  can: ICountryModel,
  gbr: ICountryModel,
  fra: ICountryModel,
  deu: ICountryModel,
  ita: ICountryModel,
  pol: ICountryModel,
  ukr: ICountryModel,
  mda: ICountryModel,
  grc: ICountryModel,
  tur: ICountryModel,
  ind: ICountryModel,
  chn: ICountryModel,
}

export interface ICountryModel {
  id: number | null;
  name: string | null;
  isoCode: string | null;
  isoCodeAlpha2: string | null;
  phone: IPhoneModel;
}
