## Setting up in `module's imports`
```ts
AngularPhoneHelperModule.forRoot({
    defaultCountryIsoCode: countriesDictionary.international.isoCode, // Country ISO code
    defaultWithCountryCode: true, // Add prefix by default
})
```

```ts
NOTE: Config is optional
```
| Key                       | Type      | Optional  | Default value  |
|---------------------------|-----------|-----------|----------------|
| `defaultCountryIsoCode`   | `string`  | `yes`     | ` `            |
| `defaultWithCountryCode`  | `boolean` | `yes`     | `true`         |

## Usage `PhoneFormatService` in `ts`
```ts
import {PhoneFormatService} from "angular-phone-helper";

...

constructor(private readonly phoneFormatService: PhoneFormatService) {
  this.phoneFormatService.isInternationalFormatted('+3 123 456 7890'); // true
  this.phoneFormatService.isInternationalFormatted('+4811231234567890'); // false
  this.phoneFormatService.isInternationalFormatted('+481 2312 67890'); // false
  this.phoneFormatService.isUnitedStatesFormatted('(123) 456-7890'); // true
  this.phoneFormatService.isUnitedStatesFormatted('+1 (123) 456-7890'); // true
  this.phoneFormatService.isUnitedStatesFormatted('+2 (123) 456-7890'); // false
}
```

## Usage `PhoneFormatPipe` in `ts`
```ts
import {countriesDictionary, PhoneFormatPipe} from "angular-phone-helper";

...

constructor(private readonly phoneFormatPipe: PhoneFormatPipe) {
  this.phoneFormatPipe.transform('31234567890'); // +3 123 456 7890
  this.phoneFormatPipe.transform('1234567890', { iso: 'USA', prefix: true }); // +1 (123) 456-7890
  this.phoneFormatPipe.transform('1234567890', { prefix: true }); // 1234567890 (wrong length)
  this.phoneFormatPipe.transform('1234567890', { iso: countriesDictionary.usa.isoCode }); // +1 (123) 456-7890
  this.phoneFormatPipe.transform('1234567890', { iso: countriesDictionary.usa.isoCode, prefix: false }) // (123) 456-7890
}
```

## Usage `PhoneFormatPipe` in `html`
```ts
{{ '31234567890' | phoneFormat }} <!-- +3 123 456 7890 -->
{{ '1234567890' | phoneFormat: { iso: 'USA', prefix: true } }} // <!-- +1 (123) 456-7890 -->
{{ '41234567890' | phoneFormat: { prefix: true } }} // <!-- +4 123 456 7890 -->
```

## Examples
| Phone               | Formatted Phone     | Description                    |
|---------------------|---------------------|--------------------------------|
| `+1234567890`       | `+1 (123) 456-7890` | USA with prefix                |
| `123456789`         | `123456789`         | USA with prefix (wrong length) |
| `(123) 456-7890`    | `+1 (123) 456-7890` | USA with prefix                |
| `+1 (123) 456-7890` | `+1 (123) 456-7890` | USA with prefix                |
| `1234567890`        | `+1 (123) 456-7890` | USA with prefix                |
| `1234567890`        | `+1 (123) 456-7890` | USA with prefix                |
| `1234567890`        | `(123) 456-7890`    | USA without prefix             |
| `1234567890`        | `+1 (123) 456-7890` | CAN with prefix                |
| `1234567890`        | `+44 12 3456 7890`  | GBR with prefix                |
| `01234567890`       | `+44 12 3456 7890`  | GBR with prefix                |
| `1234567890`        | `012 3456 7890`     | GBR without prefix             |
| `01234567890`       | `012 3456 7890`     | GBR without prefix             |
| `123456789`         | `+33 1 23 45 67 89` | FRA with prefix                |
| `0123456789`        | `+33 1 23 45 67 89` | FRA with prefix                |
| `123456789`         | `01 23 45 67 89`    | FRA without prefix             |
| `0123456789`        | `01 23 45 67 89`    | FRA without prefix             |
| `1234567890`        | `+49 123 4567890`   | DEU with prefix                |
| `01234567890`       | `+49 123 4567890`   | DEU with prefix                |
| `1234567890`        | `0123 4567890`      | DEU without prefix             |
| `01234567890`       | `0123 4567890`      | DEU without prefix             |
| `+44 1234567890`    | `+44 12 3456 7890`  | GBR with prefix                |
| `+44 01234567890`   | `+44 12 3456 7890`  | GBR with prefix                |
| `+44 1234567890`    | `012 3456 7890`     | GBR without prefix             |
| `+44 01234567890`   | `012 3456 7890`     | GBR without prefix             |
| `+33123456789`      | `+33 1 23 45 67 89` | FRA with prefix                |
| `+330123456789`     | `+33 1 23 45 67 89` | FRA with prefix                |
| `+33123456789`      | `01 23 45 67 89`    | FRA without prefix             |
| `+330123456789`     | `01 23 45 67 89`    | FRA without prefix             |
| `+491234567890`     | `+49 123 4567890`   | DEU with prefix                |
| `+4901234567890`    | `+49 123 4567890`   | DEU with prefix                |
| `+491234567890`     | `0123 4567890`      | DEU without prefix             |
| `+4901234567890`    | `0123 4567890`      | DEU without prefix             |
| `+481234567890`     | `+49 123 4567890`   | DEU with prefix                |
| `+4801234567890`    | `0123 4567890`      | DEU without prefix             |
| `+4811231234567890` | `+3 123 456 7890`   | international with prefix      |
| `null`              | ` `                 | international with prefix      |
| `123`               | `123`               | international with prefix      |
| ` `                 | ` `                 | international with prefix      |
| ` abc`              | ` `                 | international with prefix      |
| `11234567890`       | `+1 123 456 7890`   | international with prefix      |
| `11234567890`       | `+1 123 456 7890`   | international with prefix      |

## Supported countries (in progress...)

| Country ISO code | Phone prefix | Phone format      |
|------------------|--------------|-------------------|
| `International`  | ` `          | `+X XXX XXX XXXX` |
| `USA`            | `+1`         | `(XXX) XXX-XXXX`  |
| `CAN`            | `+1`         | `(XXX) XXX-XXXX`  |
| `GBR`            | `+44`        | `0XX XXXX XXXX`   |
| `FRA`            | `+33`        | `0X XX XX XX XX`  |
| `DEU`            | `+49`        | `0XXX XXXXXXX`    |
