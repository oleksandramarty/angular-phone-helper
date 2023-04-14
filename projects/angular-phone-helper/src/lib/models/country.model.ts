export interface ICountryListModel {
  [key: string]: IPhoneItemModel,
  international: IPhoneItemModel,
  usa: IPhoneItemModel,
  can: IPhoneItemModel,
  gbr: IPhoneItemModel,
  fra: IPhoneItemModel,
  deu: IPhoneItemModel,
}

export interface ICountryModel {
  id: number | null;
  name: string | null;
  code: string | null;
  codeDigit: string | null;
  format: string | null;
  isoCode: string | null;
  isoCodeAlpha2: string | null;
  pattern: string | null;
}
