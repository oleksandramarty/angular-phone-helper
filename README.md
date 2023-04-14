
## Usage in `ts`
```ts
import {countriesDictionary, PhoneFormatPipe} from "angular-phone-helper";

...

constructor(private readonly phoneFormatPipe: PhoneFormatPipe) {
  this.phoneFormatPipe.transform('1234567890'); // 
  this.phoneFormatPipe.transform('1234567890', { iso: 'USA', prefix: true });
  this.phoneFormatPipe.transform('1234567890', { prefix: true });
  this.phoneFormatPipe.transform('1234567890', { iso: countriesDictionary.usa.isoCode, prefix: true });
}
```

## Usage in `html`
```ts
{{ '1234567890' | phoneFormat }}
{{ '1234567890' | phoneFormat: { iso: 'USA', prefix: true } }}
{{ '1234567890' | phoneFormat: { prefix: true } }}
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

# AngularPhoneHelper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
