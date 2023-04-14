export interface ApiConfig {
  defaultCountryIsoCode?: string | null | undefined,
  defaultWithCountryCode?: boolean | null | undefined,
}

export const defaultConfig = {
  defaultCountryIsoCode: 'US',
  defaultWithCountryCode: true,
}
