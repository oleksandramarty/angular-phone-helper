# 188 countries + International format

```ts
{{ '31234567890' | phoneFormat }} <!-- +3 123 456 7890 -->
{{ '1234567890' | phoneFormat: { iso: 'USA', prefix: true } }} // <!-- +1 (123) 456-7890 -->
{{ '41234567890' | phoneFormat: { prefix: true } }} // <!-- +4 123 456 7890 -->
```

## Setting up in `module's imports`
```ts
import {AngularPhoneHelperModule} from "angular-phone-helper";

// default country config
AngularPhoneHelperModule.forRoot({
  defaultCountryIsoCode: 'USA', // Country ISO code
  defaultWithCountryCode: false, // Add prefix by default
})

// custom country config
AngularPhoneHelperModule.forRoot({
  defaultWithCountryCode: true,
  customCountry: {
    isoCode: 'YOUR_CODE_3_LEN',
    isoCodeAlpha2: 'YOUR_CODE_2_LEN',
    name: 'YOUR_COUNTRY_NAME',
    phone: {
      codeDigit: '10',
      code: '+10',
      format: 'XXX XXX-XX-XX',
      formatInternational: 'XXX XXX-XX-XX',
    }
  }
}),
```

```ts
NOTE: Config is optional

NOTE: For custom country
Some countries have differnt format 
For example: France
codeDigit: "33", code: "+33", formatInternational: "X XX XX XX XX", format: "0X XX XX XX XX"
X - digits
0 - const
```
### ApiConfig
| Key                       | Type           | Optional  | Default value |
|---------------------------|----------------|-----------|---------------|
| `defaultCountryIsoCode`   | `string`       | `yes`     | ` `           |
| `defaultWithCountryCode`  | `boolean`      | `yes`     | `true`        |
| `customCountry`           | `CountryModel` | `yes`     | `null`        |

### CountryModel
| Key                       | Type            | Optional | Default value |
|---------------------------|-----------------|----------|---------------|
| `name`                    | `string`        | `no`     | ` `           |
| `isoCode`                 | `string`        | `no`     | ` `           |
| `isoCodeAlpha2`           | `string`        | `no`     | ` `           |
| `phone`                   | `PhoneModel`    | `no`     | ` `           |

### PhoneModel
| Key                       | Type            | Optional | Default value |
|---------------------------|-----------------|----------|---------------|
| `code`                    | `string`        | `no`     | ` `           |
| `codeDigit`               | `string`        | `no`     | ` `           |
| `format`                  | `string`        | `no`     | ` `           |
| `formatInternational`     | `string`        | `yes`    | ` `           |

## Usage `PhoneFormatService` in `ts`
```ts
import {PhoneFormatService} from "angular-phone-helper";

constructor(private readonly phoneFormatService: PhoneFormatService) {
  this.phoneFormatService.isCustomFormatted('123 456-78-90'); // true
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

## Supported countries (in progress...)
```text
NOTE: Methods in table and `custom country method`
Input >>> phone: string
Output >>> result: boolean

NOTE: isFormatted method
Input >>> phone: string, countryIsoCode: string
Output >>> result: boolean
```

| ID    | Country ISO code | Phone prefix | Phone format      | Method*                                   |
|-------|------------------|--------------|-------------------|-------------------------------------------|
| `1`   | `International`  | ` `          | `+X XXX XXX XXXX` | `isInternationalFormatted`                |
| `2`   | `USA`            | `+1`         | `(XXX) XXX-XXXX`  | `isUnitedStatesFormatted`                 |
| `3`   | `CAN`            | `+1`         | `(XXX) XXX-XXXX`  | `isCanadaFormatted`                       |
| `4`   | `GBR`            | `+44`        | `0XX XXXX XXXX`   | `isUnitedKingdomFormatted`                |
| `5`   | `FRA`            | `+33`        | `0X XX XX XX XX`  | `isFranceFormatted`                       |
| `6`   | `DEU`            | `+49`        | `0XXX XXXXXXX`    | `isGermanyFormatted`                      |
| `7`   | `ITA`            | `+39`        | `XXX XXX XXXX`    | `isItalyFormatted`                        |
| `8`   | `POL`            | `+48`        | `XXX XXX XXX`     | `isPolandFormatted`                       |
| `9`   | `UKR`            | `+380`       | `XXX XXX XX XX`   | `isUkraineFormatted`                      |
| `10`  | `MDA`            | `+373`       | `XX XXX XXX`      | `isMoldovaFormatted`                      |
| `11`  | `GRC`            | `+30`        | `XXX XXX XXXX`    | `isGreeceFormatted`                       |
| `12`  | `TUR`            | `+90`        | `XXX XXX XXXX`    | `isTurkeyFormatted`                       |
| `13`  | `IND`            | `+91`        | `XXXXX XXXXX`     | `isIndiaFormatted`                        |
| `14`  | `CHN`            | `+86`        | `XXX XXXX XXXX`   | `isChinaFormatted`                        |
| `15`  | `IDN`            | `+62`        | `XXXX-XXXX-XXXX`  | `isIndonesiaFormatted`                    |
| `16`  | `PHL`            | `+63`        | `XXX XXX XXXX`    | `isPhilippinesFormatted`                  |
| `17`  | `AUS`            | `+61`        | `XXXX XXX XXX`    | `isAustraliaFormatted`                    |
| `18`  | `BRA`            | `+55`        | `(XX) XXXX-XXXX`  | `isBrazilFormatted`                       |
| `19`  | `ARG`            | `+54`        | `XX XXXX-XXXX`    | `isArgentinaFormatted`                    |
| `20`  | `MEX`            | `+52`        | `XX XXXX XXXX`    | `isMexicoFormatted`                       |
| `21`  | `ESP`            | `+34`        | `XXX XX XX XX`    | `isSpainFormatted`                        |
| `22`  | `CZE`            | `+420`       | `XXX XXX XXX`     | `isCzechRepublicFormatted`                |
| `23`  | `PER`            | `+51`        | `XXX XXX XXX`     | `isPeruFormatted`                         |
| `24`  | `JPN`            | `+81`        | `XXX-XXXX-XXXX`   | `isJapanFormatted`                        |
| `25`  | `KOR`            | `+82`        | `XXX-XXX-XXXX`    | `isSouthKoreaFormatted`                   |
| `26`  | `AUT`            | `+43`        | `XX XXXXXXXXX`    | `isAustriaFormatted`                      |
| `27`  | `AZE`            | `+994`       | `XX XXXXX XXXX`   | `isAzerbaijanFormatted`                   |
| `28`  | `ALB`            | `+355`       | `XXX XX XX XXX`   | `isAlbaniaFormatted`                      |
| `29`  | `DZA`            | `+213`       | `XXX XX XX XX XX` | `isAlgeriaFormatted`                      |
| `30`  | `AGO`            | `+244`       | `XXX XXX XXX`     | `isAngolaFormatted`                       |
| `31`  | `AND`            | `+376`       | `XXXXXX`          | `isAndorraFormatted`                      |
| `32`  | `ATG`            | `+1268`      | `XXX XXXX`        | `isAntiguaAndBarbudaFormatted`            |
| `33`  | `ARM`            | `+374`       | `XX XXXXXX`       | `isArmeniaFormatted`                      |
| `34`  | `AFG`            | `+93`        | `X XX XXX XXXX`   | `isAfghanistanFormatted`                  |
| `35`  | `UZB`            | `+998`       | `XX XXX XX XX`    | `isUzbekistanFormatted`                   |
| `36`  | `YEM`            | `+967`       | `X XXX XXX`       | `isYemenFormatted`                        |
| `37`  | `KNA`            | `+1869`      | `XXX-XXX-XXXX`    | `isSaintKittsAndNevisFormatted`           |
| `38`  | `BGD`            | `+880`       | `01XX XXX XXXX`   | `isBangladeshFormatted`                   |
| `39`  | `BHS`            | `+1-242`     | `(XXX) XXX-XXXX`  | `isBahamasFormatted`                      |
| `40`  | `BRB`            | `+1-246`     | `(XXX) XXX-XXXX`  | `isBarbadosFormatted`                     |
| `41`  | `BHR`            | `+973`       | `XXXX XXXX`       | `isBahrainFormatted`                      |
| `43`  | `BLZ`            | `+501`       | `XXX-XXXX`        | `isBelizeFormatted`                       |
| `44`  | `BEL`            | `+32`        | `0X XX XX XX XX`  | `isBelgiumFormatted`                      |
| `45`  | `BEN`            | `+229`       | `XX XX XX XX`     | `isBeninFormatted`                        |
| `46`  | `BGR`            | `+359`       | `X XXX XXXX`      | `isBulgariaFormatted`                     |
| `47`  | `BOL`            | `+591`       | `XXXX-XXXX`       | `isBoliviaFormatted`                      |
| `48`  | `BIH`            | `+387`       | `XXX XXX XXX`     | `isBosniaAndHerzegovinaFormatted`         |
| `49`  | `BWA`            | `+267`       | `XX XXX XXX`      | `isBotswanaFormatted`                     |
| `50`  | `BRN`            | `+673`       | `XXXX XXX`        | `isBruneiFormatted`                       |
| `51`  | `BFA`            | `+226`       | `XX XX XXXX`      | `isBurkinaFasoFormatted`                  |
| `52`  | `BDI`            | `+257`       | `XX XX XXXX`      | `isBurundiFormatted`                      |
| `53`  | `BTN`            | `+975`       | `XX XX XXX`       | `isBhutanFormatted`                       |
| `54`  | `VUT`            | `+678`       | `XXX-XXXX`        | `isVanuatuFormatted`                      |
| `55`  | `HUN`            | `+36`        | `(XX) XXX-XXXX`   | `isHungaryFormatted`                      |
| `56`  | `VEN`            | `+58`        | `(XXX) XXX-XXXX`  | `isVenezuelaFormatted`                    |
| `57`  | `TLS`            | `+670`       | `XXX-XXXX`        | `isEastTimorFormatted`                    |
| `58`  | `VNM`            | `+84`        | `XXX XXX XXXX`    | `isVietnamFormatted`                      |
| `59`  | `GAB`            | `+241`       | `X XX XX XX`      | `isGabonFormatted`                        |
| `60`  | `HTI`            | `+509`       | `XXX XX-XXXX`     | `isHaitiFormatted`                        |
| `61`  | `GUY`            | `+592`       | `XXX XXXX`        | `isGuyanaFormatted`                       |
| `62`  | `GMB`            | `+220`       | `XXX XXXX`        | `isGambiaFormatted`                       |
| `63`  | `GHA`            | `+233`       | `XXX XXX XXXX`    | `isGhanaFormatted`                        |
| `64`  | `GTM`            | `+502`       | `XXXX XXXX`       | `isGuatemalaFormatted`                    |
| `65`  | `GIN`            | `+224`       | `XX XXX XXX`      | `isGuineaFormatted`                       |
| `66`  | `GNB`            | `+245`       | `X XXX XXXX`      | `isGuineaBissauFormatted`                 |
| `67`  | `HND`            | `+504`       | `XXXX-XXXX`       | `isHondurasFormatted`                     |
| `68`  | `GRD`            | `+473`       | `XXX XXXX`        | `isGrenadaFormatted`                      |
| `69`  | `GEO`            | `+995`       | `XXX XX XX XX`    | `isGeorgiaFormatted`                      |
| `70`  | `DNK`            | `+45`        | `XX XX XX XX`     | `isDenmarkFormatted`                      |
| `71`  | `DJI`            | `+253`       | `XX XX XX XX`     | `isDjiboutiFormatted`                     |
| `72`  | `DMA`            | `+1`         | `(XXX) XXX-XXXX`  | `isDominicaFormatted`                     |
| `73`  | `DOM`            | `+1`         | `(XXX) XXX-XXXX`  | `isDominicanRepublicFormatted`            |
| `74`  | `EGY`            | `+20`        | `01X XXX XXXX`    | `isEgyptFormatted`                        |
| `75`  | `ZMB`            | `+260`       | `XXX XXX XXX`     | `isZambiaFormatted`                       |
| `76`  | `ZWE`            | `+263`       | `X XXX XXXX`      | `isZimbabweFormatted`                     |
| `77`  | `ISR`            | `+972`       | `XX-XXX-XXXX`     | `isIsraelFormatted`                       |
| `78`  | `CPV`            | `+238`       | `XXX-XX-XX`       | `isCapeVerdeFormatted`                    |
| `79`  | `KHM`            | `+855`       | `XX-XXX-XXX`      | `isCambodiaFormatted`                     |
| `80`  | `CMR`            | `+237`       | `XX-XX-XX-XX`     | `isCameroonFormatted`                     |
| `81`  | `CAF`            | `+236`       | `XX-XX-XX-XX`     | `isCentralAfricanRepublicFormatted`       |
| `82`  | `TCD`            | `+235`       | `XX-XX-XX-XX`     | `isChadFormatted`                         |
| `83`  | `CHL`            | `+56`        | `XX-XXXX-XXXX`    | `isChileFormatted`                        |
| `84`  | `COL`            | `+57`        | `XXX-XXX-XXXX`    | `isColombiaFormatted`                     |
| `85`  | `COM`            | `+269`       | `XX-XX-XX`        | `isComorosFormatted`                      |
| `86`  | `COG`            | `+242`       | `XXX-XX-XX-XXX`   | `isCongoFormatted`                        |
| `87`  | `CRI`            | `+506`       | `XXX-XXXX`        | `isCostaRicaFormatted`                    |
| `88`  | `CIV`            | `+225`       | `XX-XX-XX-XX`     | `isIvoryCoastFormatted`                   |
| `89`  | `HRV`            | `+385`       | `XXX-XXX-XXX`     | `isCroatiaFormatted`                      |
| `90`  | `CUB`            | `+53`        | `X-XXXXXX`        | `isCubaFormatted`                         |
| `91`  | `CYP`            | `+357`       | `XX-XXXXXX`       | `isCyprusFormatted`                       |
| `92`  | `ECU`            | `+593`       | `X-XXX-XXXX`      | `isEcuadorFormatted`                      |
| `93`  | `SLV`            | `+503`       | `XXXX-XXXX`       | `isElSalvadorFormatted`                   |
| `94`  | `GNQ`            | `+240`       | `XXX-XXX-XXX`     | `isEquatorialGuineaFormatted`             |
| `95`  | `EST`            | `+372`       | `XXX XXXX`        | `isEstoniaFormatted`                      |
| `96`  | `ETH`            | `+251`       | `XX XXX XXXX`     | `isEthiopiaFormatted`                     |
| `97`  | `FJI`            | `+679`       | `X XXXXXX`        | `isFijiFormatted`                         |
| `98`  | `FIN`            | `+358`       | `XXX XXX XXXX`    | `isFinlandFormatted`                      |
| `99`  | `ISL`            | `+354`       | `XXX XXXX`        | `isIcelandFormatted`                      |
| `100` | `IRQ`            | `+964`       | `XXX XXX XXXX`    | `isIraqFormatted`                         |
| `101` | `IRL`            | `+353`       | `XXX XXX XXXX`    | `isIrelandFormatted`                      |
| `102` | `JAM`            | `+1`         | `(XXX) XXX-XXXX`  | `isJamaicaFormatted`                      |
| `103` | `JOR`            | `+962`       | `X XXX XXXX`      | `isJordanFormatted`                       |
| `104` | `KAZ`            | `+7`         | `XXX-XXX-XXXX`    | `isKazakhstanFormatted`                   |
| `105` | `KEN`            | `+254`       | `XXX-XXX-XXX`     | `isKenyaFormatted`                        |
| `106` | `KIR`            | `+686`       | `XXX-XXX`         | `isKiribatiFormatted`                     |
| `107` | `PRK`            | `+850`       | `XXX-XXX-XXXX`    | `isNorthKoreaFormatted`                   |
| `108` | `KWT`            | `+965`       | `XXXX-XXXX`       | `isKuwaitFormatted`                       |
| `109` | `KGZ`            | `+996`       | `XXX-XXX-XXX`     | `isKyrgyzstanFormatted`                   |
| `110` | `LAO`            | `+856`       | `XX-XXX-XXX`      | `isLaosFormatted`                         |
| `111` | `LVA`            | `+371`       | `XXXX-XXXX`       | `isLatviaFormatted`                       |
| `112` | `LBN`            | `+961`       | `XX-XXX-XXX`      | `isLebanonFormatted`                      |
| `113` | `LSO`            | `+266`       | `XXX-XXXXX`       | `isLesothoFormatted`                      |
| `114` | `LBR`            | `+231`       | `XXX-XXX-XXXX`    | `isLiberiaFormatted`                      |
| `115` | `LBY`            | `+218`       | `XX-XXX-XXXX`     | `isLibyaFormatted`                        |
| `116` | `LIE`            | `+423`       | `XXXXXXX`         | `isLiechtensteinFormatted`                |
| `117` | `LTU`            | `+370`       | `(X-XXXXX)`       | `isLithuaniaFormatted`                    |
| `118` | `LUX`            | `+352`       | `XXXXXXX`         | `isLuxembourgFormatted`                   |
| `119` | `MKD`            | `+389`       | `XXX-XXX-XX`      | `isNorthMacedoniaFormatted`               |
| `120` | `MDG`            | `+261`       | `XX-XX-XXX-XX`    | `isMadagascarFormatted`                   |
| `121` | `MWI`            | `+265`       | `XXXXXXXXX`       | `isMalawiFormatted`                       |
| `122` | `MYS`            | `+60`        | `XX-XXXX-XXXX`    | `isMalaysiaFormatted`                     |
| `123` | `MDV`            | `+960`       | `XXXXXXX`         | `isMaldivesFormatted`                     | 
| `124` | `MLT`            | `+356`       | `XX-XX-XX-XX`     | `isMaltaFormatted`                        |
| `125` | `MHL`            | `+692`       | `XXX-XXXX`        | `isMarshallIslandsFormatted`              |
| `126` | `MRT`            | `+222`       | `XX-XX-XX-XX`     | `isMauritaniaFormatted`                   |
| `127` | `MUS`            | `+230`       | `XXXX-XXXX`       | `isMauritiusFormatted`                    |
| `128` | `FSM`            | `+691`       | `XXX-XXXX`        | `isMicronesiaFederatedStatesOfFormatted`  |
| `129` | `MCO`            | `+377`       | `XX-XX-XX-XX-XX`  | `isMonacoFormatted`                       |
| `130` | `MNG`            | `+976`       | `XX-XX-XXXX`      | `isMongoliaFormatted`                     |
| `131` | `MNE`            | `+382`       | `XX-XXX-XXX`      | `isMontenegroFormatted`                   |
| `132` | `MAR`            | `+212`       | `XX-XX-XX-XX-XX`  | `isMoroccoFormatted`                      |
| `133` | `MOZ`            | `+258`       | `XX-XXX-XXXX`     | `isMozambiqueFormatted`                   |
| `134` | `MMR`            | `+95`        | `XX-XXX-XXX`      | `isMyanmarFormatted`                      |
| `135` | `NAM`            | `+264`       | `XXX-XXXXXX`      | `isNamibiaFormatted`                      |
| `136` | `NRU`            | `+674`       | `XXX-XXXX`        | `isNauruFormatted`                        |
| `137` | `NPL`            | `+977`       | `XXX-XXXXXXX`     | `isNepalFormatted`                        |
| `138` | `NLD`            | `+31`        | `X-XXXXXX`        | `isNetherlandsFormatted`                  |
| `139` | `NZL`            | `+64`        | `XX-XXXX-XXXX`    | `isNewZealandFormatted`                   |
| `140` | `NER`            | `+227`       | `XX-XX-XXXX`      | `isNigerFormatted`                        |
| `141` | `NGA`            | `+234`       | `XXX-XXX-XXXX`    | `isNigeriaFormatted`                      |
| `142` | `NIU`            | `+683`       | `XXXX`            | `isNiueFormatted`                         |
| `143` | `NOR`            | `+47`        | `XXXX-XXXX`       | `isNorwayFormatted`                       |
| `144` | `OMN`            | `+968`       | `XXX-XXXX-XXXX`   | `isOmanFormatted`                         |
| `145` | `PAK`            | `+92`        | `XXX XXXXXXX`     | `isPakistanFormatted`                     |
| `146` | `PLW`            | `+680`       | `XXX-XXXX`        | `isPalauFormatted`                        |
| `147` | `PAN`            | `+507`       | `XXX-XXXX-XXXX`   | `isPanamaFormatted`                       |
| `148` | `PNG`            | `+675`       | `XXXX-XXX`        | `isPapuaNewGuineaFormatted`               |
| `149` | `PRY`            | `+595`       | `XXX-XXXXXX`      | `isParaguayFormatted`                     |
| `150` | `PRT`            | `+351`       | `XXX XXX XXX`     | `isPortugalFormatted`                     |
| `151` | `QAT`            | `+974`       | `XXX-XXXX-XXXX`   | `isQatarFormatted`                        |
| `152` | `ROU`            | `+40`        | `0XX XXX XXX`     | `isRomaniaFormatted`                      |
| `153` | `RWA`            | `+250`       | `XXX XXX XXXX`    | `isRwandaFormatted`                       |
| `154` | `WSM`            | `+685`       | `XX XXXX`         | `isSamoaFormatted`                        |
| `155` | `SMR`            | `+378`       | `XXX XXXXXX`      | `isSanMarinoFormatted`                    |
| `156` | `STP`            | `+239`       | `9XXX-XXXX`       | `isSaoTomeAndPrincipeFormatted`           |
| `157` | `SAU`            | `+966`       | `XXX XXX XXXX`    | `isSaudiArabiaFormatted`                  |
| `158` | `SEN`            | `+221`       | `XX XXX XX XX`    | `isSenegalFormatted`                      |
| `159` | `SRB`            | `+381`       | `XX XXXXXXX`      | `isSerbiaFormatted`                       |
| `160` | `SYC`            | `+248`       | `X XX XX XX`      | `isSeychellesFormatted`                   |
| `161` | `SLE`            | `+232`       | `(XXX) XXX XXXX`  | `isSierraLeoneFormatted`                  |
| `162` | `SGP`            | `+65`        | `XXXX XXXX`       | `isSingaporeFormatted`                    |
| `163` | `SVK`            | `+421`       | `XXX/XXX XXX`     | `isSlovakiaFormatted`                     |
| `164` | `SVN`            | `+386`       | `0X XXX XX XX`    | `isSloveniaFormatted`                     |
| `165` | `SLB`            | `+677`       | `XXX XXXX`        | `isSolomonIslandsFormatted`               |
| `166` | `SOM`            | `+252`       | `XX-XXX-XXXX`     | `isSomaliaFormatted`                      |
| `167` | `ZAF`            | `+27`        | `XXX XXX XXXX`    | `isSouthAfricaFormatted`                  |
| `168` | `SSD`            | `+211`       | `XX XXX XXXX`     | `isSouthSudanFormatted`                   |
| `169` | `LKA`            | `+94`        | `XX XXX XXXX`     | `isSriLankaFormatted`                     |
| `170` | `SDN`            | `+249`       | `XXX XXX XXXX`    | `isSudanFormatted`                        |
| `171` | `SUR`            | `+597`       | `XXX-XXXX`        | `isSurinameFormatted`                     |
| `172` | `SWZ`            | `+268`       | `XXX XXXX`        | `isEswatiniFormatted`                     |
| `173` | `SWE`            | `+46`        | `XXX-XXX XX XX`   | `isSwedenFormatted`                       |
| `174` | `CHE`            | `+41`        | `0XX XXX XX XX`   | `isSwitzerlandFormatted`                  |
| `175` | `TWN`            | `+886`       | `XXX-XXXXXX`      | `isTaiwanFormatted`                       |
| `176` | `TJK`            | `+992`       | `XXX-XX-XX-XX`    | `isTajikistanFormatted`                   |
| `177` | `TZA`            | `+255`       | `XXX-XXX-XXXX`    | `isTanzania,UnitedRepublicOfFormatted`    |
| `178` | `THA`            | `+66`        | `XXX-XXXX-XXXX`   | `isThailandFormatted`                     |
| `179` | `TGO`            | `+228`       | `XX-XX-XXXX`      | `isTogoFormatted`                         |
| `180` | `TON`            | `+676`       | `XXX-XXXX`        | `isTongaFormatted`                        |
| `181` | `TTO`            | `+1868`      | `XXX-XXXX`        | `isTrinidadAndTobagoFormatted`            |
| `182` | `TUN`            | `+216`       | `XX-XXX-XXX`      | `isTunisiaFormatted`                      |
| `183` | `TKM`            | `+993`       | `XX-XX-XX-XX-XX`  | `isTurkmenistanFormatted`                 |
| `184` | `TUV`            | `+688`       | `XXX-XXXX`        | `isTuvaluFormatted`                       |
| `185` | `UGA`            | `+256`       | `XX XXX XXXX`     | `isUgandaFormatted`                       |
| `186` | `ARE`            | `+971`       | `XXXX XXX XXXX`   | `isUnitedArabEmiratesFormatted`           |
| `187` | `URY`            | `+598`       | `X XXX XXXX`      | `isUruguayFormatted`                      |
| `188` | `VCT`            | `+1784`      | `XXX-XXXX`        | `isSaintVincentAndtheGrenadinesFormatted` |
| `189` | `LCA`            | `+1758`      | `XXX-XXXX`        | `isSaintLuciaFormatted`                   |



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
