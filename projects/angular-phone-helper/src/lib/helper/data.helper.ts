import {ICountryListModel} from "../models/country.model";

export const countriesDictionary: ICountryListModel = {
  international: { id: 1, name: 'International', isoCode: 'null', isoCodeAlpha2: 'null', phone: { codeDigit: '', code: '', format: '+X XXX XXX XXXX', pattern: `^\\+\\d \\d{3} \\d{3} \\d{4}$`, }, },
  usa: { id: 2, name: 'United States', isoCode: 'USA', isoCodeAlpha2: 'US', phone: { codeDigit: '1', code: '+1', format: '(XXX) XXX-XXXX', pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  can: { id: 3, name: 'Canada', isoCode: 'CAN', isoCodeAlpha2: 'CA', phone: { codeDigit: '1', code: '+1', format: '(XXX) XXX-XXXX', pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  gbr: { id: 4, name: 'United Kingdom', isoCode: 'GBR', isoCodeAlpha2: 'GB', phone: { codeDigit: '44', code: '+44', format: '0XX XXXX XXXX', pattern: `^0\\d{2}\\s\\d{4}\\s\\d{4}$`, }, },
  fra: { id: 5, name: 'France', isoCode: 'FRA', isoCodeAlpha2: 'FR', phone: { codeDigit: '33', code: '+33', format: '0X XX XX XX XX', pattern: `^0\\d\\s\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}$`, }, },
  deu: { id: 6, name: 'Germany', isoCode: 'DEU', isoCodeAlpha2: 'DE', phone: { codeDigit: '49', code: '+49', format: '0XXX XXXXXXX', pattern: `^0\\d{3}\\s\\d{8}$`, }, },
  ita: { id: 7, name: 'Italy', isoCode: 'ITA', isoCodeAlpha2: 'IT', phone: { codeDigit: '39', code: '+39', format: 'XXX XXX XXXX', pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  pol: { id: 8, name: 'Poland', isoCode: 'POL', isoCodeAlpha2: 'PL', phone: { codeDigit: '48', code: '+48', format: 'XXX XXX XXX', pattern: `^\\d{3}\\s\\d{3}\\s\\d{3}$`, }, },
  ukr: { id: 9, name: 'Ukraine', isoCode: 'UKR', isoCodeAlpha2: 'UA"', phone: { codeDigit: '380', code: '+380', format: 'XXX XXX XX XX', pattern: `^\\d{3}\\s\\d{3}\\s\\d{2}\\s\\d{2}$`, }, },
  mda: { id: 10, name: 'Moldova', isoCode: 'MDA', isoCodeAlpha2: 'MD', phone: { codeDigit: '373', code: '+373', format: 'XX XXX XXX', pattern: `^\\d{2}\\s\\d{3}\\s\\d{3}$`, }, },
  grc: { id: 11, name: 'Greece', isoCode: 'GRC', isoCodeAlpha2: 'GR', phone: { codeDigit: '30', code: '+30', format: 'XXX XXX XXXX', pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  tur: { id: 12, name: 'Turkey', isoCode: 'TUR', isoCodeAlpha2: 'TR', phone: { codeDigit: '90', code: '+90', format: 'XXX XXX XXXX', pattern: `^\\d{3}\\s\\d{3}\\s\\d{4}$`, }, },
  ind: { id: 13, name: 'India', isoCode: 'IND', isoCodeAlpha2: 'IN', phone: { codeDigit: '91', code: '+91', format: 'XXXXX XXXXX', pattern: `^\\d{5}\\s\\d{5}$`, }, },
  chn: { id: 14, name: 'China', isoCode: 'CHN', isoCodeAlpha2: 'CN', phone: { codeDigit: '86', code: '+86', format: 'XXX XXXX XXXX', pattern: `^\\d{3}\\s\\d{4}\\s\\d{4}$`, }, },
}
