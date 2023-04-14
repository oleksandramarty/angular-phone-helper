import {ICountryListModel} from "../models/country.model";

export const countriesDictionary: ICountryListModel = {
  international: { id: 1, name: 'International', isoCode: 'null', isoCodeAlpha2: 'null', phone: { codeDigit: '', code: '', format: '+X XXX XXX XXXX', pattern: `^\\+\\d \\d{3} \\d{3} \\d{4}$`, }, },
  usa: { id: 2, name: 'United States', isoCode: 'USA', isoCodeAlpha2: 'US', phone: { codeDigit: '1', code: '+1', format: '(XXX) XXX-XXXX', pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  can: { id: 3, name: 'Canada', isoCode: 'CAN', isoCodeAlpha2: 'CA', phone: { codeDigit: '1', code: '+1', format: '(XXX) XXX-XXXX', pattern: `^\\(\\d{3}\\)\\s\\d{3}\\-\\d{4}$`, }, },
  gbr: { id: 4, name: 'United Kingdom', isoCode: 'GBR', isoCodeAlpha2: 'GB', phone: { codeDigit: '44', code: '+44', format: '0XX XXXX XXXX', pattern: `^0\\d{2}\\s\\d{4}\\s\\d{4}$`, }, },
  fra: { id: 5, name: 'France', isoCode: 'FRA', isoCodeAlpha2: 'FR', phone: { codeDigit: '33', code: '+33', format: '0X XX XX XX XX', pattern: `^0\\d\\s\\d{2}\\s\\d{2}\\s\\d{2}\\s\\d{2}$`, }, },
  deu: { id: 6, name: 'Germany', isoCode: 'DEU', isoCodeAlpha2: 'DE', phone: { codeDigit: '49', code: '+49', format: '0XXX XXXXXXX', pattern: `^0\\d{3}\\s\\d{8}$`, }, },
}
