/**
 Interface representing a phone model.
 *
 @property {string|null} code - The phone code.
 @property {string|null} codeDigit - The phone code digit.
 @property {string|null} format - The phone format.
 @property {string|null} [pattern] - The phone pattern.
 @property {string|null} [formatInternational] - The international phone format.
 */
export interface IPhoneModel {
  code: string | null;
  codeDigit: string | null;
  format: string | null;
  pattern?: string | null;
  formatInternational?: string | null;
}

/**
 * Options for the phone number pipe.
 *
 * @typedef {Object} IPhonePipeOptions
 * @property {string|null|undefined} [iso] - ISO country code. If provided, the phone number will be formatted according to the specified country's rules.
 * @property {boolean|null|undefined} [prefix] - Whether or not to include the country code prefix. Default is `false`.
 * @property {string|null|undefined} [code] - Phone code. Default is ``.
 * @property {string|null|undefined} [format] - Phone format. Default is ``.
 */
export interface IPhonePipeOptions {
  iso?: string | null | undefined,
  prefix?: boolean | null | undefined,
  code?: string | null | undefined,
  format?: string | null | undefined,
}
