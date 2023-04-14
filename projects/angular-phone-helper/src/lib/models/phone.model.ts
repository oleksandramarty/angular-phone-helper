export interface IPhoneModel {
  code: string | null;
  codeDigit: string | null;
  format: string | null;
  pattern: string | null;
}

export interface IPhonePipeOptions {
  iso?: string | null | undefined,
  prefix?: boolean | null | undefined,
}
